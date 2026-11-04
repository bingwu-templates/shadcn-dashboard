import BlogPost from 'src/components/apps/blog/blog-post';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import StyleAwareWrapper from 'src/components/shared/StyleAwareWrapper';
import StyleDivider from 'src/components/shared/StyleDivider';

const BCrumb = [{ to: '/', title: '首页' }, { title: '博客应用' }];

const Blog = () => {
  return (
    <StyleAwareWrapper
      lyraClassName="flex flex-col p-px gap-px bg-border"
      defaultClassName="flex flex-col gap-4"
    >
      <BreadcrumbComp title="博客应用" items={BCrumb} />
      <StyleDivider />
      <BlogPost />
    </StyleAwareWrapper>
  );
};
export default Blog;
