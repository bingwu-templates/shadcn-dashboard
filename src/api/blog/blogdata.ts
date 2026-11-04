import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import { uniqueId } from 'lodash';
import { BlogType, BlogPostType } from 'src/types/apps/blog';
import { http, HttpResponse } from 'msw';

import blogImg1 from '@/assets/images/blog/blog-img1.png';
import blogImg2 from '@/assets/images/blog/blog-img2.png';
import blogImg3 from '@/assets/images/blog/blog-img3.png';
import blogImg4 from '@/assets/images/blog/blog-img4.png';
import blogImg5 from '@/assets/images/blog/blog-img5.png';
import blogImg6 from '@/assets/images/blog/blog-img6.png';
import blogImg8 from '@/assets/images/blog/blog-img8.png';
import blogImg9 from '@/assets/images/blog/blog-img9.png';
import blogImg12 from '@/assets/images/blog/blog-img12.png';

import userImg2 from '@/assets/images/profile/user-2.png';
import userImg3 from '@/assets/images/profile/user-3.png';
import userImg4 from '@/assets/images/profile/user-4.png';
import userImg5 from '@/assets/images/profile/user-5.png';
import userImg6 from '@/assets/images/profile/user-6.png';

const chance = new Chance();
const authorNames = ['林晨', '王雨桐', '李思远', '张宁', '陈晓'];
const articleParagraphs = [
  '科技正在改变我们的日常生活。本文从实际使用体验出发，介绍产品的主要特点，以及值得关注的细节，帮助你找到适合自己的选择。',
  '好的设计始于对需求的理解。从信息呈现到操作反馈，每一个细节都会影响体验。通过持续观察与改进，让产品更加简单、清晰、易用。',
  '保持好奇，记录生活中的新发现。无论是工作中的一次尝试，还是日常生活里的小小改变，都可能成为下一次进步的起点。',
];
const commentTexts = [
  '这篇文章很有帮助，期待更多实用的分享。',
  '感谢整理，文中的建议值得在实际工作中尝试。',
  '观点很有启发，也欢迎大家分享自己的使用体验。',
];

const BlogComment: BlogType[] = [
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: userImg5,
      name: chance.pickone(authorNames),
    },
    time: chance.date(),
    comment: chance.pickone(commentTexts),
    replies: [],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: userImg3,
      name: chance.pickone(authorNames),
    },
    time: chance.date(),
    comment: chance.pickone(commentTexts),
    replies: [
      {
        id: uniqueId('#comm_'),
        profile: {
          id: uniqueId(),
          avatar: userImg3,
          name: chance.pickone(authorNames),
        },
        time: chance.date(),
        comment: chance.pickone(commentTexts),
      },
    ],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: userImg4,
      name: chance.pickone(authorNames),
    },
    time: chance.date(),
    comment: chance.pickone(commentTexts),
    replies: [],
  },
];

const BlogPost: BlogPostType[] = [
  {
    id: uniqueId(),
    slug: 'garmins-instinct-crossover-is-a-rugged-hybrid-smartwatch',
    title: 'Garmin Instinct Crossover：兼顾耐用与智能的混合腕表',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg2,
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '数码',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg5,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    slug: 'after-twitter-staff-cuts-survivors-face-radio-silence',
    title: 'Twitter 裁员之后，留任员工面临沟通困境',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg1,
    createdAt: sub(new Date(), { days: 7, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '生活方式',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg2,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    slug: 'apple-is-apparently-working-on-a-new-streamlined-accessibility-for-ios',
    title: 'Apple 正在为 iOS 开发更简洁的无障碍功能',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg3,
    createdAt: sub(new Date(), { days: 5, hours: 2, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '设计',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg3,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    slug: 'why-figma-is-selling-to-adobe-for-20-billion',
    title: 'Figma 为何以 200 亿美元出售给 Adobe',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg4,
    createdAt: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '设计',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg4,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    slug: 'streaming-video-way-before-it-was-cool-go-dark-tomorrow',
    title: '早期流媒体视频平台将于明日停止服务',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg5,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '生活方式',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg5,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    slug: 'as-yen-tumbles-gadget-loving-japan-goes-for-secondhand-iphones-',
    title: '日元走弱，日本数码爱好者转向二手 iPhone',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg6,
    createdAt: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '数码',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg6,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    slug: 'intel-loses-bid-to-revive-antitrust-case-against-patent-foe-fortress',
    title: 'Intel 重启针对 Fortress 专利反垄断诉讼的申请受挫',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg9,
    createdAt: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '社会',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg2,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    slug: 'covid-outbreak-deepens-as-more-lockdowns-loom-in-china',
    title: '中国新冠疫情加剧，更多地区可能采取封控措施',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg8,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '健康',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg3,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    slug: 'early-black-friday-amazon-deals-cheap-tvs-headphones-laptops',
    title: 'Amazon 黑色星期五提前购：电视、耳机与笔记本优惠',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg9,
    createdAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '数码',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: userImg4,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    slug: 'presented-by-max-rushden-with-barry-glendenning-philippe-auclair',
    title: 'Max Rushden 主持，Barry Glendenning 与 Philippe Auclair 参与',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg1,
    createdAt: sub(new Date(), { days: 0, hours: 1, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '健康',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: userImg5,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    slug: 'garmins-instinct-crossover-solar-is-a-rugged-hybrid-smartwatch',
    title: 'Garmin Instinct Crossover Solar：坚固耐用的太阳能混合腕表',
    content: chance.pickone(articleParagraphs),
    coverImg: blogImg12,
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: '生活方式',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg6,
      name: chance.pickone(authorNames),
    },
    comments: BlogComment,
    published: true,
  },
];
// Mocked Apis
export const Bloghandlers = [
  // Mock api endpoint to fetch all blogposts
  http.get('/api/data/blog/BlogPosts', () => {
    try {
      return HttpResponse.json({ status: 200, data: BlogPost, msg: 'success' });
    } catch {
      return HttpResponse.json({ status: 400, msg: '操作失败，请稍后重试' });
    }
  }),

  // Mock api endpoint to add post info
  http.post('/api/data/blog/post/add', async ({ request }) => {
    try {
      const { postId, comment } = (await request.json()) as {
        postId: number | string;
        comment: BlogType;
      };
      const postIndex = BlogPost.findIndex((x) => x.id === postId);
      const post = BlogPost[postIndex];
      const cComments = post.comments || [];
      post.comments = [comment, ...cComments];
      return HttpResponse.json({
        status: 200,
        data: { posts: [...BlogPost] },
        msg: 'success',
      });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: '操作失败，请稍后重试',
        error,
      });
    }
  }),
];
