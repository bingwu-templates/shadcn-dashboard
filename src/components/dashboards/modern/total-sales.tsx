import { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Line, LineChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { DashboardCard } from '../../shared/dashboard-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const allChartData: Record<string, { date: string; newUser: number; existingUser: number }[]> = {
  '近 30 天': [
    { date: '3月30日', newUser: 12, existingUser: 20 },
    { date: '4月1日', newUser: 18, existingUser: 25 },
    { date: '4月2日', newUser: 14, existingUser: 22 },
    { date: '4月4日', newUser: 22, existingUser: 30 },
    { date: '4月5日', newUser: 16, existingUser: 18 },
    { date: '4月7日', newUser: 20, existingUser: 24 },
    { date: '4月9日', newUser: 18, existingUser: 32 },
    { date: '4月11日', newUser: 26, existingUser: 22 },
    { date: '4月12日', newUser: 20, existingUser: 26 },
    { date: '4月14日', newUser: 30, existingUser: 20 },
    { date: '4月15日', newUser: 22, existingUser: 28 },
    { date: '4月17日', newUser: 26, existingUser: 22 },
    { date: '4月19日', newUser: 28, existingUser: 18 },
    { date: '4月20日', newUser: 24, existingUser: 24 },
    { date: '4月22日', newUser: 38, existingUser: 18 },
    { date: '4月23日', newUser: 22, existingUser: 26 },
    { date: '4月24日', newUser: 20, existingUser: 22 },
    { date: '4月26日', newUser: 24, existingUser: 20 },
    { date: '4月27日', newUser: 18, existingUser: 24 },
    { date: '4月29日', newUser: 22, existingUser: 20 },
    { date: '5月1日', newUser: 20, existingUser: 18 },
    { date: '5月4日', newUser: 24, existingUser: 22 },
  ],
  '近 7 天': [
    { date: '4月28日', newUser: 18, existingUser: 22 },
    { date: '4月29日', newUser: 22, existingUser: 20 },
    { date: '4月30日', newUser: 20, existingUser: 28 },
    { date: '5月1日', newUser: 30, existingUser: 18 },
    { date: '5月2日', newUser: 24, existingUser: 26 },
    { date: '5月3日', newUser: 32, existingUser: 20 },
    { date: '5月4日', newUser: 22, existingUser: 28 },
  ],
  '近 90 天': [
    { date: '2月1日', newUser: 14, existingUser: 22 },
    { date: '2月15日', newUser: 20, existingUser: 28 },
    { date: '3月1日', newUser: 18, existingUser: 24 },
    { date: '3月15日', newUser: 26, existingUser: 20 },
    { date: '3月30日', newUser: 22, existingUser: 30 },
    { date: '4月14日', newUser: 32, existingUser: 22 },
    { date: '4月22日', newUser: 38, existingUser: 18 },
    { date: '4月29日', newUser: 24, existingUser: 26 },
    { date: '5月4日', newUser: 28, existingUser: 20 },
  ],
};

const xAxisLabels: Record<string, Set<string>> = {
  '近 30 天': new Set([
    '3月30日',
    '4月4日',
    '4月9日',
    '4月14日',
    '4月19日',
    '4月24日',
    '4月29日',
    '5月4日',
  ]),
  '近 7 天': new Set(['4月28日', '4月29日', '4月30日', '5月1日', '5月2日', '5月3日', '5月4日']),
  '近 90 天': new Set([
    '2月1日',
    '2月15日',
    '3月1日',
    '3月15日',
    '3月30日',
    '4月14日',
    '4月29日',
    '5月4日',
  ]),
};

const chartConfig = {
  newUser: { label: '新用户', color: 'var(--color-primary)' },
  existingUser: {
    label: '已有用户',
    color: 'color-mix(in srgb, var(--primary) 60%, transparent)',
  },
} satisfies ChartConfig;

const periodOptions = ['近 30 天', '近 7 天', '近 90 天'];

function useAnimatedNumber(target: number, duration = 450) {
  const [display, setDisplay] = useState(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    const from = currentRef.current;
    const diff = target - from;
    if (diff === 0) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(from + diff * eased);
      currentRef.current = next;
      setDisplay(next);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        currentRef.current = target;
        setDisplay(target);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);
  return display;
}

function AnimatedValue({ value }: { value: number }) {
  const animated = useAnimatedNumber(value);
  return <>{animated.toLocaleString('zh-CN')}</>;
}

type TooltipItem = {
  name?: string;
  value?: number;
  color?: string;
  dataKey?: string;
  type?: string;
};
type ConfigEntry = { label?: string; color?: string };

function AnimatedTooltipContent({
  active,
  payload,
  label,
  hideLabel = false,
  config,
}: {
  active?: boolean;
  payload?: TooltipItem[];
  label?: string;
  hideLabel?: boolean;
  config?: Record<string, ConfigEntry>;
}) {
  if (!active || !payload?.length) return null;
  const items = payload.filter((item) => item.type !== 'none' && item.value !== undefined);
  if (!items.length) return null;
  return (
    <div className="grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      {!hideLabel && label && <div className="font-medium">{label}</div>}
      <div className="grid gap-1.5">
        {items.map((item, index) => (
          <div key={index} className="flex w-full items-center gap-2">
            <div
              className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-muted-foreground">
              {config?.[item.dataKey ?? '']?.label ?? item.name}
            </span>
            <span className="ml-auto font-mono font-medium tabular-nums text-foreground">
              <AnimatedValue value={item.value as number} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TotalSales() {
  const [period, setPeriod] = useState(periodOptions[0]);

  const chartData = allChartData[period];
  const visibleLabels = xAxisLabels[period];

  return (
    <DashboardCard className="flex flex-col gap-0!">
      {/* Header */}
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp size={16} className="text-muted-foreground" />
          销售概览
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5 flex flex-col gap-6">
        {/* Stats row + period selector */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="text-base font-normal text-foreground leading-6">销售总额</span>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-2xl font-semibold tracking-[-0.3px] text-foreground leading-8">
                $12,450.00
              </span>
              <span className="text-sm font-medium text-chart-2">+22%</span>
              <span className="text-sm font-normal text-muted-foreground">较上月</span>
            </div>
          </div>

          <Select value={period} onValueChange={(v) => v && setPeriod(v)}>
            <SelectTrigger className="h-auto! w-fit text-sm font-medium text-foreground border-border shadow-[0px_1px_2px_rgba(0,0,0,0.05)] cursor-pointer gap-1.5 px-3">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {periodOptions.map((opt) => (
                <SelectItem key={opt} value={opt} className="cursor-pointer">
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Chart */}
        <ChartContainer config={chartConfig} className="h-[215px]! w-full">
          <LineChart data={chartData} margin={{ top: 8, right: 4, bottom: 0, left: -10 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" strokeDasharray="4 4" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              interval={0}
              tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
              tickFormatter={(v) => (visibleLabels.has(v) ? v : '')}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
              ticks={[0, 10, 20, 30, 40]}
              domain={[0, 40]}
              tickFormatter={(v) => (v === 0 ? '0' : `${v}千`)}
            />
            <ChartTooltip
              cursor={{
                stroke: 'var(--border)',
                strokeWidth: 1,
                strokeDasharray: '4 4',
              }}
              content={<AnimatedTooltipContent config={chartConfig} />}
            />
            <ReferenceLine
              x="4月22日"
              stroke="var(--border)"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
            {/* New User — solid primary */}
            <Line
              dataKey="newUser"
              type="linear"
              stroke="var(--color-primary)"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4, fill: 'var(--color-primary)', strokeWidth: 0 }}
              isAnimationActive
              animationBegin={0}
              animationDuration={700}
              animationEasing="ease-out"
            />
            {/* Existing User — dashed muted */}
            <Line
              dataKey="existingUser"
              type="linear"
              stroke="color-mix(in srgb, var(--primary) 60%, transparent)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
              activeDot={{
                r: 4,
                fill: 'color-mix(in srgb, var(--primary) 60%, transparent)',
                strokeWidth: 0,
              }}
              isAnimationActive
              animationBegin={120}
              animationDuration={700}
              animationEasing="ease-out"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </DashboardCard>
  );
}
