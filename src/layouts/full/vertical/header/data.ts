//   Notification Data
import { Calendar, Settings, LucideIcon, Command, LayoutPanelLeft, Files } from 'lucide-react';

interface NotificationType {
  title: string;
  icon: LucideIcon;
  subtitle: string;
  bgcolor: string;
  color: string;
  time: string;
  isRead?: boolean;
}

const Notification: NotificationType[] = [
  {
    icon: Calendar,
    bgcolor: 'bg-chart-4/10',
    color: 'text-chart-4',
    title: '今日活动',
    subtitle: '温馨提醒：你今天有活动安排',
    time: '09:15',
    isRead: false,
  },
  {
    icon: Settings,
    bgcolor: 'bg-chart-1/10',
    color: 'text-chart-1',
    title: '设置',
    subtitle: '你可以根据需要自定义此模板',
    time: '16:36',
    isRead: false,
  },
  {
    icon: LayoutPanelLeft,
    bgcolor: 'bg-chart-2/10 ',
    color: 'text-chart-2',
    title: '管理后台上线',
    subtitle: '快来看看全新的管理后台！',
    time: '09:30',
    isRead: false,
  },
  {
    icon: Command,
    bgcolor: 'bg-primary/5',
    color: 'text-primary',
    title: '管理后台上线',
    subtitle: '快来看看全新的管理后台！',
    time: '09:30',
    isRead: false,
  },
  {
    icon: Calendar,
    bgcolor: 'bg-chart-5/10 ',
    color: 'text-chart-5',
    title: '今日活动',
    subtitle: '温馨提醒：你今天有活动安排',
    time: '09:15',
    isRead: false,
  },
  {
    icon: Settings,
    bgcolor: 'bg-chart-1/10',
    color: 'text-chart-1',
    title: '设置',
    subtitle: '你可以根据需要自定义此模板',
    time: '16:36',
    isRead: true,
  },
];

interface profileType {
  avatar: LucideIcon;
  title: string;
  href: string;
  badge: boolean;
}

import { Home, User, Keyboard } from 'lucide-react';

const profileDD: profileType[] = [
  {
    avatar: Home,
    title: '首页',
    href: '/',
    badge: false,
  },
  {
    avatar: User,
    title: '个人资料',
    href: '/',
    badge: false,
  },
  {
    avatar: Files,
    title: '发票',
    href: '/',
    badge: true,
  },
  {
    avatar: Keyboard,
    title: '订阅',
    href: '/',
    badge: false,
  },
  {
    avatar: Settings,
    title: '账户设置',
    href: '/',
    badge: false,
  },
];

export { Notification, profileDD };
