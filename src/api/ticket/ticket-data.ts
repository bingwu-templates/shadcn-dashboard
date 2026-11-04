import { Chance } from 'chance';
import { TicketType } from 'src/types/apps/ticket';
import { http, HttpResponse } from 'msw';

import userImg2 from '@/assets/images/profile/user-2.png';
import userImg3 from '@/assets/images/profile/user-3.png';
import userImg4 from '@/assets/images/profile/user-4.png';
import userImg5 from '@/assets/images/profile/user-5.png';
import userImg6 from '@/assets/images/profile/user-6.png';
import userImg7 from '@/assets/images/profile/user-7.png';
import userImg8 from '@/assets/images/profile/user-8.png';
import userImg10 from '@/assets/images/profile/user-10.png';

const chance = new Chance();

let TicketData: TicketType[] = [
  {
    Id: 1,
    ticketTitle: '账户登录后无法查看个人资料',
    ticketDescription: '登录成功后个人资料页面一直显示加载中，请协助排查账户权限和数据加载问题。',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg10,
    AgentName: '李明',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 2,
    ticketTitle: '订单状态更新后未收到通知',
    ticketDescription: '订单状态已变更，但站内通知没有更新，请检查通知设置并协助处理。',
    Status: 'Pending',
    Label: 'warning',
    thumb: userImg2,
    AgentName: '王磊',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 3,
    ticketTitle: '移动端表单提交失败',
    ticketDescription: '在手机上填写完整信息后仍无法提交表单，请协助检查字段校验和页面兼容性。',
    Status: 'Open',
    Label: 'success',
    thumb: userImg3,
    AgentName: '姜华',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 4,
    ticketTitle: '账户登录后无法查看个人资料',
    ticketDescription: '登录成功后个人资料页面一直显示加载中，请协助排查账户权限和数据加载问题。',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg4,
    AgentName: '王磊',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 5,
    ticketTitle: '移动端表单提交失败',
    ticketDescription: '在手机上填写完整信息后仍无法提交表单，请协助检查字段校验和页面兼容性。',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg5,
    AgentName: '李明',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 6,
    ticketTitle: '订单状态更新后未收到通知',
    ticketDescription: '订单状态已变更，但站内通知没有更新，请检查通知设置并协助处理。',
    Status: 'Pending',
    Label: 'warning',
    thumb: userImg6,
    AgentName: '姜华',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 7,
    ticketTitle: '账户登录后无法查看个人资料',
    ticketDescription: '登录成功后个人资料页面一直显示加载中，请协助排查账户权限和数据加载问题。',
    Status: 'Open',
    Label: 'success',
    thumb: userImg7,
    AgentName: '王磊',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 8,
    ticketTitle: '订单状态更新后未收到通知',
    ticketDescription: '订单状态已变更，但站内通知没有更新，请检查通知设置并协助处理。',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg8,
    AgentName: '张伟',
    Date: chance.date(),
    deleted: false,
  },
];

export const TicketHandlers = [
  // Mock GET request to retrieve Ticket data
  http.get('/api/data/ticket/TicketData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: '成功', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '服务器内部错误',
        error,
      });
    }
  }),

  // Mock DELETE endpoint for deleting a ticket
  http.delete('/api/data/ticket/delete', async ({ request }) => {
    try {
      const { id } = (await request.json()) as { id: string | number };
      const remainingTickets = TicketData.filter((ticket) => ticket.Id !== id);
      TicketData = remainingTickets;
      return HttpResponse.json({ status: 200, msg: '成功', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '服务器内部错误',
        error,
      });
    }
  }),

  // Mock POST endpoint for adding a ticket
  http.post('/api/data/ticket/add', async ({ request }) => {
    try {
      const newTicket = (await request.json()) as TicketType;
      TicketData.push(newTicket);
      return HttpResponse.json({ status: 200, msg: '成功', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '服务器内部错误',
        error,
      });
    }
  }),
];
