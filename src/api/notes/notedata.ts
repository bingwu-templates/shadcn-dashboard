import { http, HttpResponse } from 'msw';
import { notesType } from 'src/types/apps/notes';

export let NotesData: notesType[] = [
  {
    id: 1,
    color: 'primary',
    title:
      '本周工作计划：梳理项目需求，确认各项任务的负责人和完成时间。优先处理用户反馈较多的问题，完成后更新进度，并在周五整理本周成果与下周安排。',
    datef: '2023-06-03T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 2,
    color: 'destructive',
    title:
      '产品灵感记录：让常用操作更容易找到，为复杂表单补充清晰的提示。下一次评审重点讨论导航结构、搜索体验和移动端布局，并收集团队意见。',
    datef: '2023-06-02T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 3,
    color: 'chart-4',
    title:
      '会议备忘：发布前完成页面检查和数据核对，确认通知、搜索与筛选功能正常。将待解决的问题记录到工单中，安排负责人持续跟进。',
    datef: '2023-06-01T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 4,
    color: 'chart-2',
    title:
      '本周工作计划：梳理项目需求，确认各项任务的负责人和完成时间。优先处理用户反馈较多的问题，完成后更新进度，并在周五整理本周成果与下周安排。',
    datef: '2023-06-03T23:28:56.782Z',
    deleted: false,
  },
];

export const NotesHandlers = [
  // GET request to retrieve Notes data
  http.get('/api/data/notes/NotesData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: '成功', data: NotesData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '服务器内部错误',
        error,
      });
    }
  }),

  // DELETE endpoint for deleting a note
  http.delete('/api/notes/delete', async ({ request }) => {
    try {
      const { id } = (await request.json()) as { id: string | number };
      const remainingNotes = NotesData.filter((note) => note.id !== id);
      NotesData = remainingNotes;
      return HttpResponse.json({ status: 200, msg: '成功', data: NotesData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '服务器内部错误',
        error,
      });
    }
  }),

  //  POST endpoint for adding a new note

  http.post('/api/notes/add', async ({ request }) => {
    const currentDate = new Date();
    try {
      const { title, color } = (await request.json()) as { title: string; color: string };

      // Find the highest ID currently in the NotesData array
      const highestId = NotesData.reduce((maxId, note) => Math.max(maxId, note.id), 0);

      // Create a new note with the next unique ID
      const newNote = {
        id: highestId + 1,
        title,
        color,
        deleted: false,
        datef: currentDate.toISOString(),
      };

      NotesData.push(newNote);
      return HttpResponse.json({ status: 200, msg: '成功', data: NotesData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '服务器内部错误',
        error,
      });
    }
  }),

  // PUT endpoint for updating a note
  http.put('/api/notes/update', async ({ request }) => {
    try {
      const { id, title, color } = (await request.json()) as {
        id: string | number;
        title: string;
        color: string;
      };
      const index = NotesData.findIndex((note) => note.id === id);

      if (index !== -1) {
        NotesData[index] = { ...NotesData[index], title, color };
        return HttpResponse.json({
          status: 200,
          msg: '成功',
          data: NotesData,
        });
      } else {
        return HttpResponse.json({ status: 400, msg: '未找到笔记' });
      }
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '服务器内部错误',
        error,
      });
    }
  }),
];
