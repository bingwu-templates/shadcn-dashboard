import { BriefcaseBusiness, ArrowDownUp, Ellipsis } from 'lucide-react';
import { CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { DashboardCard } from '../../shared/dashboard-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import SimpleBar from 'simplebar-react';
import { Button } from '@/components/ui/button';
import avatar1 from '@/assets/images/profile/user-1.png';
import avatar2 from '@/assets/images/profile/user-2.png';
import avatar3 from '@/assets/images/profile/user-3.png';
import avatar4 from '@/assets/images/profile/user-4.png';
import avatar9 from '@/assets/images/profile/user-9.png';
import avatar7 from '@/assets/images/profile/user-7.png';
import avatar6 from '@/assets/images/profile/user-6.png';

type StatusKey = 'Processing' | 'Delayed' | 'Delivered' | 'Cancelled';

const statusConfig: Record<StatusKey, { bg: string; text: string; label: string }> = {
  Processing: { label: '处理中', bg: 'bg-[#f54900]/10', text: 'text-[#f54900]' },
  Delayed: { label: '已延期', bg: 'bg-[#ec003f]/10', text: 'text-[#ec003f]' },
  Delivered: { label: '已交付', bg: 'bg-[#009689]/10', text: 'text-[#009689]' },
  Cancelled: { label: '已取消', bg: 'bg-[#ec003f]/10', text: 'text-[#ec003f]' },
};

const orders: {
  id: string;
  project: string;
  avatar: string;
  name: string;
  role: string;
  status: StatusKey;
  price: string;
  deadline: string;
}[] = [
  {
    id: 'SD-2026-001',
    project: 'Modernize',
    avatar: avatar2,
    name: '陈雨桐',
    role: '项目经理',
    status: 'Processing',
    price: '$2,499.00',
    deadline: '2026年6月14日',
  },
  {
    id: 'SD-2026-002',
    project: 'Spike Admin',
    avatar: avatar3,
    name: '王子轩',
    role: '网站开发工程师',
    status: 'Delayed',
    price: '$1,348.00',
    deadline: '2026年5月10日',
  },
  {
    id: 'SD-2026-003',
    project: 'Material Pro',
    avatar: avatar7,
    name: '林浩',
    role: '界面与体验设计师',
    status: 'Delivered',
    price: '$1,198.00',
    deadline: '2026年7月2日',
  },
  {
    id: 'SD-2026-004',
    project: 'Xtreme Admin',
    avatar: avatar6,
    name: '周欣怡',
    role: '前端开发工程师',
    status: 'Delivered',
    price: '$799.00',
    deadline: '2026年5月30日',
  },
  {
    id: 'SD-2026-005',
    project: 'Nova Suite',
    avatar: avatar4,
    name: '李思远',
    role: '前端开发工程师',
    status: 'Cancelled',
    price: '$599.00',
    deadline: '2026年7月15日',
  },
  {
    id: 'SD-2026-006',
    project: 'Pulse CRM',
    avatar: avatar9,
    name: '金晨',
    role: '后端开发工程师',
    status: 'Processing',
    price: '$5,498.00',
    deadline: '2026年6月5日',
  },
  {
    id: 'SD-2026-007',
    project: 'Vertex UI',
    avatar: avatar1,
    name: '安可',
    role: '界面与体验设计师',
    status: 'Delivered',
    price: '$1,199.00',
    deadline: '2026年6月18日',
  },
];

export default function ProjectsOrders() {
  return (
    <DashboardCard className="flex flex-col gap-0!">
      {/* Header */}
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-2">
          <BriefcaseBusiness size={16} className="text-foreground" />
          <span>项目与订单</span>
        </CardTitle>
      </CardHeader>

      {/* Table */}
      <CardContent className="px-0!">
        <SimpleBar>
          <div className="overflow-x-auto">
            <div className="min-w-[820px]">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-border">
                    <TableHead className="pl-4! px-4 py-3 h-auto text-sm font-normal text-muted-foreground w-[160px]">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        项目
                        <ArrowDownUp size={14} className="text-muted-foreground shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="px-4 py-3 h-auto text-sm font-normal text-muted-foreground">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        条目
                        <ArrowDownUp size={14} className="text-muted-foreground shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="px-4 py-3 h-auto text-sm font-normal text-muted-foreground w-[130px]">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        状态
                        <ArrowDownUp size={14} className="text-muted-foreground shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="px-4 py-3 h-auto text-sm font-normal text-muted-foreground w-[120px]">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        价格
                        <ArrowDownUp size={14} className="text-muted-foreground shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="px-4 py-3 h-auto text-sm font-normal text-muted-foreground w-[130px]">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        截止日期
                        <ArrowDownUp size={14} className="text-muted-foreground shrink-0" />
                      </div>
                    </TableHead>
                    <TableHead className="pr-4! px-2 py-3 h-auto w-[48px]" />
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {orders.map((order) => {
                    const { bg, text, label } = statusConfig[order.status];
                    return (
                      <TableRow key={order.id} className="border-border hover:bg-muted/30">
                        {/* Project */}
                        <TableCell className="pl-4! px-4 py-3 w-[160px]">
                          <div className="flex flex-col leading-5">
                            <span className="text-sm font-medium text-foreground whitespace-nowrap">
                              {order.id}
                            </span>
                            <span className="text-sm font-normal text-muted-foreground whitespace-nowrap">
                              {order.project}
                            </span>
                          </div>
                        </TableCell>

                        {/* Item */}
                        <TableCell className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={order.avatar}
                              alt={order.name}
                              width={30}
                              height={30}
                              className="rounded-full object-cover shrink-0"
                            />
                            <div className="flex flex-col leading-5">
                              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                                {order.name}
                              </span>
                              <span className="text-sm font-normal text-muted-foreground whitespace-nowrap">
                                {order.role}
                              </span>
                            </div>
                          </div>
                        </TableCell>

                        {/* Status */}
                        <TableCell className="px-4 py-3 w-[130px]">
                          <span
                            className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-normal whitespace-nowrap ${bg} ${text}`}
                          >
                            {label}
                          </span>
                        </TableCell>

                        {/* Price */}
                        <TableCell className="px-4 py-3 w-[120px]">
                          <span className="text-sm font-normal text-muted-foreground whitespace-nowrap">
                            {order.price}
                          </span>
                        </TableCell>

                        {/* Deadline */}
                        <TableCell className="px-4 py-3 w-[130px]">
                          <span className="text-sm font-normal text-muted-foreground whitespace-nowrap">
                            {order.deadline}
                          </span>
                        </TableCell>

                        {/* Actions */}
                        <TableCell className="pr-4! px-2 py-3 w-[48px]">
                          <Button
                            variant="ghost"
                            className="p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                            aria-label="更多选项"
                          >
                            <Ellipsis size={16} className="text-foreground" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </SimpleBar>
      </CardContent>
    </DashboardCard>
  );
}
