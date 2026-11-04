import user1 from '@/assets/images/profile/user-1.png';
import user2 from '@/assets/images/profile/user-2.png';
import user3 from '@/assets/images/profile/user-3.png';
import user4 from '@/assets/images/profile/user-4.png';
import user5 from '@/assets/images/profile/user-5.png';
import user6 from '@/assets/images/profile/user-6.png';
import user7 from '@/assets/images/profile/user-7.png';
import user8 from '@/assets/images/profile/user-8.png';

export type EmployeeRow = {
  avatar: string;
  name: string;
  position: string;
  salary: string;
  department: string;
  status: string;
  statuscolor: string;
};

const EmployeeData: EmployeeRow[] = [
  {
    avatar: user3,
    name: '孙立',
    department: '设计',
    position: '经理',
    status: '已启用',
    statuscolor: 'chart-2',
    salary: '$3,900',
  },
  {
    avatar: user5,
    name: '张德',
    department: '工程',
    position: '高级',
    status: '已启用',
    statuscolor: 'chart-1',
    salary: '$5,200',
  },
  {
    avatar: user8,
    name: '倪文',
    department: '工程',
    position: '经理',
    status: '未启用',
    statuscolor: 'destructive',
    salary: '$6,800',
  },
  {
    avatar: user1,
    name: '余杰',
    department: '管理',
    position: '主管',
    status: '已启用',
    statuscolor: 'chart-3',
    salary: '$7,400',
  },
  {
    avatar: user7,
    name: '麦可',
    department: '市场营销',
    position: '初级',
    status: '已启用',
    statuscolor: 'chart-1',
    salary: '$2,900',
  },
  {
    avatar: user2,
    name: '陈安琪',
    department: '设计',
    position: '高级',
    status: '已启用',
    statuscolor: 'chart-2',
    salary: '$4,600',
  },
  {
    avatar: user4,
    name: '唐博文',
    department: '工程',
    position: '主管',
    status: '未启用',
    statuscolor: 'destructive',
    salary: '$6,100',
  },
  {
    avatar: user6,
    name: '王莎',
    department: '人力资源',
    position: '经理',
    status: '已启用',
    statuscolor: 'chart-3',
    salary: '$4,200',
  },
  {
    avatar: user3,
    name: '张博',
    department: '工程',
    position: '高级',
    status: '已启用',
    statuscolor: 'chart-4',
    salary: '$5,900',
  },
  {
    avatar: user5,
    name: '戴雨',
    department: '管理',
    position: '主管',
    status: '已启用',
    statuscolor: 'chart-2',
    salary: '$7,800',
  },
  {
    avatar: user8,
    name: '陆晨',
    department: '工程',
    position: '初级',
    status: '未启用',
    statuscolor: 'destructive',
    salary: '$3,100',
  },
  {
    avatar: user1,
    name: '夏雅',
    department: '数据分析',
    position: '高级',
    status: '已启用',
    statuscolor: 'chart-1',
    salary: '$5,500',
  },
];

const PerformersData = [
  {
    key: 'performerData1',
    profileImg: user3,
    username: '孙立',
    designation: '网站设计师',
    project: 'Elite Admin',
    priority: '低',
    color: 'primary',
    bgcolor: 'bg-primary/10! text-primary!',
    budget: '3.9千',
  },
  {
    key: 'performerData2',
    profileImg: user5,
    username: '张德',
    designation: '网站开发工程师',
    project: 'Flexy Admin',
    priority: '中',
    color: 'chart-4',
    bgcolor: 'bg-chart-4/10! text-chart-4!',
    budget: '24.5千',
  },
  {
    key: 'performerData3',
    profileImg: user8,
    username: '倪文',
    designation: '网站经理',
    project: 'Material Pro',
    priority: '高',
    color: 'chart-1',
    bgcolor: 'bg-chart-1/10! text-chart-1!',
    budget: '12.8千',
  },
  {
    key: 'performerData4',
    profileImg: user1,
    username: '余杰',
    designation: '项目经理',
    project: 'Xtreme Admin',
    priority: '低',
    color: 'chart-2',
    bgcolor: 'bg-chart-2/10! text-chart-2!',
    budget: '4.8千',
  },
  {
    key: 'performerData5',
    profileImg: user7,
    username: '麦可',
    designation: '内容编辑',
    project: 'Helping Hands WP Theme',
    priority: '高',
    color: 'destructive',
    bgcolor: 'bg-destructive/10! text-destructive!',
    budget: '9.3千',
  },
];
export { PerformersData, EmployeeData };
