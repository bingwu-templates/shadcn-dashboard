import { getBlogSlug } from '@/lib/blog';
import React, { useEffect, useContext } from 'react';

import { Circle, Eye, MessageSquare, Quote } from 'lucide-react';
import { formatDate } from '@/lib/locale';
import { uniqueId } from 'lodash';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useParams } from 'react-router';
import { BlogContext, BlogContextProps } from '../../../../context/blog-context/index';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import BlogComment from './blog-commnets';
import { BlogType } from 'src/types/apps/blog';

const BlogDetailData = () => {
  const { posts, setLoading, addComment }: BlogContextProps = useContext(BlogContext);
  const { id } = useParams();
  const post = posts.find((p) => getBlogSlug(p) === id);
  const [replyTxt, setReplyTxt] = React.useState('');

  const onSubmit = () => {
    if (!post || !post.id || !replyTxt.trim()) return;
    const newComment = {
      id: uniqueId('#comm_'),
      profile: {
        id: uniqueId('#USER_'),
        avatar: post.author?.avatar || '',
        name: post.author?.name || '',
        time: '刚刚',
      },
      comment: replyTxt,
      replies: [],
    };
    addComment(post.id, newComment);
    setReplyTxt('');
  };

  // skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      {post ? (
        <>
          <Card className="py-0! overflow-hidden gap-0!">
            <div className="relative">
              <div className="overflow-hidden h-[450px]">
                <img
                  src={post?.coverImg || ''}
                  alt="博客封面"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <Badge className="absolute bottom-8 end-6 bg-muted text-muted-foreground">
                阅读约 2 分钟
              </Badge>
            </div>
            <div className="flex justify-between items-center -mt-7 px-6">
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Avatar className="cursor-pointer h-10 w-10">
                        <AvatarImage src={post?.author?.avatar} alt={post?.author?.name} />
                        <AvatarFallback>{post?.author?.name?.charAt(0) ?? '?'}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{post?.author?.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Badge className="mt-3 " variant={'secondary'}>
                {post?.category}
              </Badge>
              <h2 className="md:text-4xl text-2xl my-6">{post?.title}</h2>
              <div>
                <div className="flex gap-3">
                  <div className="flex gap-2 items-center text-sm ">
                    <Eye size={18} />
                    {post?.view}
                  </div>
                  <div className="flex gap-2 items-center  text-sm">
                    <MessageSquare size={18} /> {post?.comments?.length || 0}
                  </div>
                  <div className="ms-auto flex gap-2 items-center   text-sm">
                    <Circle size={7} />
                    <small>
                      {post && post.createdAt
                        ? formatDate(new Date(post.createdAt), 'M月d日 EEEE')
                        : ''}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-8" />
            <div className="px-6 pb-6">
              <h2 className="md:text-3xl text-2xl pb-5">深入了解这个话题</h2>
              <p>
                从日常使用场景出发，我们可以更清楚地了解一款产品的价值。清晰的信息结构、顺畅的操作流程和及时的反馈，能够帮助使用者更快找到需要的内容，也让复杂的任务变得简单。
              </p>
              <br></br>
              <p>
                在设计和使用数字产品时，细节同样值得关注。可以从最常见的需求开始，逐步验证每个功能是否好用，再根据真实反馈持续改进。让信息更容易理解，让每一次操作都有明确的结果。
              </p>
              <br></br>
              <p>
                <b>这是一段加粗文字。</b>
              </p>
              <i>这是一段斜体文字。</i>

              <Separator className="my-8" />
              <h3 className="text-xl mb-3">无序列表</h3>
              <ul className="list-disc pl-6">
                <li>明确目标与使用场景</li>
                <li>整理现有资料和相关链接</li>
                <li>从简单的步骤开始实践</li>
                <li>明确目标与使用场景</li>
                <li>整理现有资料和相关链接</li>
                <li>从简单的步骤开始实践</li>
              </ul>
              <Separator className="my-8" />
              <h3 className="text-xl mb-3">有序列表</h3>
              <ol className="list-decimal pl-6">
                <li>明确目标与使用场景</li>
                <li>整理现有资料和相关链接</li>
                <li>从简单的步骤开始实践</li>
                <li>明确目标与使用场景</li>
                <li>整理现有资料和相关链接</li>
                <li>从简单的步骤开始实践</li>
              </ol>
              <Separator className="my-8" />
              <h3 className="text-xl mb-3">引用</h3>
              <div className="pt-5 pb-4 px-4 rounded-md border-s-2 border-primary flex gap-1 items-start bg-primary/5">
                <Quote size={20} className="-mt-1" />
                <h2 className="text-base font-bold">
                  认真记录每一次尝试，在持续改进中发现新的可能。
                </h2>
              </div>
            </div>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                <h5 className="text-xl mb-2">发表评论</h5>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                rows={4}
                value={replyTxt}
                onChange={(e) => setReplyTxt(e.target.value)}
              ></Textarea>
              <Button variant={'default'} className="w-fit mt-3 rounded-md " onClick={onSubmit}>
                发布评论
              </Button>
              <div className="mt-6">
                <div className="flex gap-3 items-center">
                  <h5 className="text-xl ">评论</h5>
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-primary bg-primary/5 font-bold">
                    {post?.comments?.length || 0}
                  </div>
                </div>
                <div>
                  {post?.comments?.map((comment: BlogType) => {
                    return <BlogComment key={comment.id} comment={comment} />;
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <p className="text-xl text-center py-6 font-bold">未找到文章</p>
      )}
    </>
  );
};
export default BlogDetailData;
