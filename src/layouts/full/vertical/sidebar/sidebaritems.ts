export interface ChildItem {
  id?: number | string;
  name: string;
  icon?: LucideIcon;
  items?: ChildItem[];
  item?: unknown;
  url?: string;
  color?: string;
  disabled?: boolean;
  subtitle?: string;
  badge?: boolean;
  badgeType?: string;
  badgeContent?: string;
  isActive?: boolean;
  external?: boolean;
}
export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: LucideIcon;
  id?: number;
  to?: string;
  item?: MenuItem[];
  items?: ChildItem[];
  url?: string;
  disabled?: boolean;
  subtitle?: string;
  badgeType?: string;
  badge?: boolean;
  badgeContent?: string;
  isActive?: boolean;
}
import { uniqueId } from 'lodash';
import {
  BarChart3,
  Banknote,
  BookOpen,
  CreditCard,
  Lock,
  LogIn,
  LucideIcon,
  PieChart,
  ShieldCheck,
  Ticket,
  Unlink,
  UserPlus,
  Smile,
  House,
  NotebookText,
  Component,
  Table2,
  Form,
  CircleUserRound,
} from 'lucide-react';
const SidebarContent: MenuItem[] = [
  {
    heading: '仪表盘',
    items: [
      {
        id: uniqueId(),
        name: '现代仪表盘',
        icon: House,
        url: '/',
      },
    ],
  },
  {
    heading: '页面',
    items: [
      {
        id: uniqueId(),
        name: '表格',
        icon: Table2,
        url: '/pages/tables',
      },
      {
        id: uniqueId(),
        name: '表单',
        icon: Form,
        url: '/pages/form',
      },
      {
        id: uniqueId(),
        name: '个人资料',
        icon: CircleUserRound,
        url: '/pages/user-profile',
      },
    ],
  },
  {
    heading: '应用',
    items: [
      {
        id: uniqueId(),
        name: '笔记',
        icon: NotebookText,
        url: '/apps/notes',
      },
      {
        name: '博客',
        id: uniqueId(),
        icon: BookOpen,
        items: [
          {
            id: uniqueId(),
            name: '文章列表',
            url: '/apps/blog/post',
          },
          {
            id: uniqueId(),
            name: '文章详情',
            url: '/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
          },
          {
            id: uniqueId(),
            name: '编辑文章',
            url: '/apps/blog/edit',
          },
          {
            id: uniqueId(),
            name: '新建文章',
            url: '/apps/blog/create',
          },
          {
            id: uniqueId(),
            name: '文章管理',
            url: '/apps/blog/manage-blog',
          },
        ],
      },
      {
        id: uniqueId(),
        name: '工单',
        icon: Ticket,
        url: '/apps/tickets',
      },
    ],
  },
  {
    heading: '界面组件',
    items: [
      {
        name: 'ShadCn',
        id: uniqueId(),
        icon: Component,
        items: [
          {
            id: uniqueId(),
            name: '按钮',
            url: 'https://shadcndashboard.dev/components/button',
            external: true,
          },
          {
            id: uniqueId(),
            name: '头像',
            url: 'https://shadcndashboard.dev/components/avatar',
            external: true,
          },
          {
            id: uniqueId(),
            name: '徽标',
            url: 'https://shadcndashboard.dev/components/badge',
            external: true,
          },
          {
            id: uniqueId(),
            name: '工具提示',
            url: 'https://shadcndashboard.dev/components/tooltip',
            external: true,
          },
          {
            id: uniqueId(),
            name: '输入框',
            url: 'https://shadcndashboard.dev/components/input',
            external: true,
          },
          {
            id: uniqueId(),
            name: '多行文本框',
            url: 'https://shadcndashboard.dev/components/textarea',
            external: true,
          },
          {
            id: uniqueId(),
            name: '开关',
            url: 'https://shadcndashboard.dev/components/switch',
            external: true,
          },
          {
            id: uniqueId(),
            name: '选项卡',
            url: 'https://shadcndashboard.dev/components/tab',
            external: true,
          },
          {
            id: uniqueId(),
            name: '选择器',
            url: 'https://shadcndashboard.dev/components/select',
            external: true,
          },
          {
            id: uniqueId(),
            name: '复选框',
            url: 'https://shadcndashboard.dev/components/checkbox',
            external: true,
          },
          {
            id: uniqueId(),
            name: '折叠面板',
            url: 'https://shadcndashboard.dev/components/accordion',
            external: true,
          },
          {
            id: uniqueId(),
            name: '卡片',
            url: 'https://shadcndashboard.dev/components/card',
            external: true,
          },
          {
            id: uniqueId(),
            name: '单选组',
            url: 'https://shadcndashboard.dev/components/radio-group',
            external: true,
          },
          {
            id: uniqueId(),
            name: '日期选择器',
            url: 'https://shadcndashboard.dev/components/calendar',
            external: true,
          },
        ],
      },
    ],
  },
  {
    heading: '表单组件',
    items: [
      {
        name: 'Shadcn 表单',
        id: uniqueId(),
        icon: Banknote,
        items: [
          {
            id: uniqueId(),
            name: '输入框',
            url: 'https://shadcndashboard.dev/components/input',
            external: true,
          },
          {
            id: uniqueId(),
            name: '选择器',
            url: 'https://shadcndashboard.dev/components/select',
            external: true,
          },
          {
            id: uniqueId(),
            name: '复选框',
            url: 'https://shadcndashboard.dev/components/checkbox',
            external: true,
          },
          {
            id: uniqueId(),
            name: '单选框',
            url: 'https://shadcndashboard.dev/components/radio-group',
            external: true,
          },
          {
            id: uniqueId(),
            name: '日期选择器',
            url: 'https://shadcndashboard.dev/components/calendar',
            external: true,
          },
          {
            id: uniqueId(),
            name: '选择器',
            url: 'https://shadcndashboard.dev/components/select',
            external: true,
          },
        ],
      },
    ],
  },
  {
    heading: '小组件',
    items: [
      {
        name: '卡片',
        id: uniqueId(),
        icon: CreditCard,
        url: 'https://shadcndashboard.dev/ui-blocks/card',
        external: true,
      },
      {
        name: '图表',
        id: uniqueId(),
        icon: PieChart,
        url: 'https://shadcndashboard.dev/ui-blocks/chart',
        external: true,
      },
    ],
  },
  {
    heading: '图标',
    items: [
      {
        id: uniqueId(),
        name: '图标库',
        icon: Smile,
        url: '/icons/iconify',
      },
    ],
  },
  {
    heading: '身份验证',
    items: [
      {
        id: uniqueId(),
        name: '错误页面',
        icon: Unlink,
        url: '/auth/error',
      },
      {
        name: '登录',
        id: uniqueId(),
        icon: LogIn,
        items: [
          {
            id: uniqueId(),
            name: '卡片式登录',
            url: '/auth/auth2/login',
          },
        ],
      },
      {
        name: '注册',
        id: uniqueId(),
        icon: UserPlus,
        items: [
          {
            id: uniqueId(),
            name: '卡片式注册',
            url: '/auth/auth2/register',
          },
        ],
      },
      {
        name: '忘记密码',
        id: uniqueId(),
        icon: Lock,
        items: [
          {
            id: uniqueId(),
            name: '卡片式找回密码',
            url: '/auth/auth2/forgot-password',
          },
        ],
      },
      {
        name: '两步验证',
        id: uniqueId(),
        icon: ShieldCheck,
        items: [
          {
            id: uniqueId(),
            name: '卡片式两步验证',
            url: '/auth/auth2/two-steps',
          },
        ],
      },
      {
        id: uniqueId(),
        name: '多级菜单',
        icon: BarChart3,
        items: [
          {
            id: uniqueId(),
            name: '一级菜单',
            items: [
              {
                id: uniqueId(),
                name: '二级菜单',
                url: '#',
              },
            ],
          },
        ],
      },
    ],
  },
];
export default SidebarContent;
