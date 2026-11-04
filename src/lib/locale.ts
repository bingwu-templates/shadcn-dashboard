import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function formatDate(value: Date | string | number, pattern = 'yyyy年M月d日') {
  return format(new Date(value), pattern, { locale: zhCN });
}

export const ticketStatusLabels: Record<string, string> = {
  Pending: '待处理',
  Open: '处理中',
  Closed: '已关闭',
  Moderate: '一般',
};
