import StyleDivider from 'src/components/shared/StyleDivider';
import StyleAwareWrapper from 'src/components/shared/StyleAwareWrapper';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import FormCompo from 'src/components/form';
const BCrumb = [{ to: '/', title: '首页' }, { title: '表单' }];

function TablesPage() {
  return (
    <StyleAwareWrapper lyraClassName="flex flex-col p-px gap-px bg-border">
      <BreadcrumbComp title="表单组件" items={BCrumb} />
      <StyleDivider />
      <FormCompo />
    </StyleAwareWrapper>
  );
}

export default TablesPage;
