import { useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Bookmark,
  Calendar,
  ChartColumn,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Download,
  Eye,
  File,
  FileText,
  Folder,
  Heart,
  House,
  Image,
  LayoutDashboard,
  Mail,
  Menu,
  MessageSquare,
  Pencil,
  Plus,
  Search,
  Settings,
  Shield,
  Star,
  Trash2,
  Upload,
  User,
  Users,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { Card } from 'src/components/ui/card';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';

const icons = [
  { name: 'House', label: '首页', category: '导航', component: House },
  { name: 'LayoutDashboard', label: '仪表盘', category: '导航', component: LayoutDashboard },
  { name: 'Menu', label: '菜单', category: '导航', component: Menu },
  { name: 'ArrowLeft', label: '向左', category: '导航', component: ArrowLeft },
  { name: 'ArrowRight', label: '向右', category: '导航', component: ArrowRight },
  { name: 'ArrowUp', label: '向上', category: '导航', component: ArrowUp },
  { name: 'ArrowDown', label: '向下', category: '导航', component: ArrowDown },
  { name: 'ChevronDown', label: '展开', category: '导航', component: ChevronDown },
  { name: 'Search', label: '搜索', category: '操作', component: Search },
  { name: 'Plus', label: '添加', category: '操作', component: Plus },
  { name: 'Pencil', label: '编辑', category: '操作', component: Pencil },
  { name: 'Trash2', label: '删除', category: '操作', component: Trash2 },
  { name: 'Check', label: '确认', category: '操作', component: Check },
  { name: 'X', label: '关闭', category: '操作', component: X },
  { name: 'Copy', label: '复制', category: '操作', component: Copy },
  { name: 'Settings', label: '设置', category: '操作', component: Settings },
  { name: 'File', label: '文件', category: '文件', component: File },
  { name: 'FileText', label: '文档', category: '文件', component: FileText },
  { name: 'Folder', label: '文件夹', category: '文件', component: Folder },
  { name: 'Image', label: '图片', category: '文件', component: Image },
  { name: 'Upload', label: '上传', category: '文件', component: Upload },
  { name: 'Download', label: '下载', category: '文件', component: Download },
  { name: 'User', label: '用户', category: '用户', component: User },
  { name: 'Users', label: '团队', category: '用户', component: Users },
  { name: 'Shield', label: '安全', category: '用户', component: Shield },
  { name: 'Heart', label: '喜欢', category: '用户', component: Heart },
  { name: 'Star', label: '收藏', category: '用户', component: Star },
  { name: 'Bookmark', label: '书签', category: '用户', component: Bookmark },
  { name: 'ChartColumn', label: '统计', category: '数据', component: ChartColumn },
  { name: 'Eye', label: '浏览', category: '数据', component: Eye },
  { name: 'Calendar', label: '日历', category: '数据', component: Calendar },
  { name: 'Clock', label: '时间', category: '数据', component: Clock },
  { name: 'Bell', label: '通知', category: '消息', component: Bell },
  { name: 'Mail', label: '邮件', category: '消息', component: Mail },
  { name: 'MessageSquare', label: '评论', category: '消息', component: MessageSquare },
];
const categories = ['全部', '导航', '操作', '文件', '用户', '数据', '消息'];

export default function IconGallery() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('全部');
  const search = query.trim().toLowerCase();
  const results = icons.filter(
    (icon) =>
      (category === '全部' || icon.category === category) &&
      `${icon.label} ${icon.name} ${icon.category}`.toLowerCase().includes(search),
  );

  const copyIcon = async (name: string) => {
    try {
      await navigator.clipboard.writeText(`<${name} size={24} />`);
      toast.success('已复制图标代码');
    } catch {
      toast.error('复制失败，请手动复制下方的使用示例');
    }
  };

  return (
    <Card className="flex flex-col gap-6 p-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">浏览图标</h2>
        <p className="text-sm text-muted-foreground">
          按中文名称、分类或图标标识搜索，点击图标即可复制使用代码。
        </p>
      </div>
      <Input
        aria-label="搜索图标"
        placeholder="搜索图标，例如：日历、搜索、Calendar…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="flex flex-wrap gap-2" role="group" aria-label="图标分类">
        {categories.map((item) => (
          <Button
            key={item}
            variant={item === category ? 'default' : 'outline'}
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <p className="text-sm text-muted-foreground" role="status">
        共找到 {results.length} 个图标
      </p>
      {results.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
          {results.map(({ name, label, component: IconComponent }) => (
            <button
              key={name}
              type="button"
              onClick={() => copyIcon(name)}
              aria-label={`复制${label}图标代码`}
              className="flex min-h-28 flex-col items-center justify-center gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
            >
              <IconComponent size={24} aria-hidden="true" />
              <span className="text-sm font-medium">{label}</span>
              <code className="max-w-full truncate text-xs text-muted-foreground">{name}</code>
            </button>
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-muted-foreground">
          未找到匹配图标，请尝试其他关键词或分类。
        </p>
      )}
      <div className="space-y-3 border-t pt-6">
        <h3 className="font-semibold">使用示例</h3>
        <p className="text-sm text-muted-foreground">
          这些图标来自项目已安装的 lucide-react，直接导入即可使用。
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>{`import { Calendar } from 'lucide-react';

<Calendar size={24} />`}</code>
        </pre>
      </div>
    </Card>
  );
}
