import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import { BlogProvider } from 'src/context/blog-context';
import ManageBlogTable from '@/components/apps/blog/blogtable/manage-blogtable';
import StyleAwareWrapper from 'src/components/shared/StyleAwareWrapper';
import StyleDivider from 'src/components/shared/StyleDivider';

const BCrumb = [{ to: '/', title: '首页' }, { title: '文章管理' }];

const MangeBlog = () => {
  return (
    <BlogProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
        defaultClassName="flex flex-col gap-4"
      >
        <BreadcrumbComp title="文章管理" items={BCrumb} />
        <StyleDivider />
        <ManageBlogTable />
      </StyleAwareWrapper>
    </BlogProvider>
  );
};

export default MangeBlog;
