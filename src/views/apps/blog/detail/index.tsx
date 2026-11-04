import BlogDetailData from '@/components/apps/blog/detail';
import { BlogProvider } from 'src/context/blog-context';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import StyleAwareWrapper from 'src/components/shared/StyleAwareWrapper';
import StyleDivider from 'src/components/shared/StyleDivider';

const BCrumb = [{ to: '/', title: '首页' }, { title: '文章详情' }];

const BlogDetail = () => {
  return (
    <BlogProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
        defaultClassName="flex flex-col gap-4"
      >
        <BreadcrumbComp title="文章详情" items={BCrumb} />
        <StyleDivider />
        <BlogDetailData />
      </StyleAwareWrapper>
    </BlogProvider>
  );
};

export default BlogDetail;
