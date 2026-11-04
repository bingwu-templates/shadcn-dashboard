import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import maintenance from '@/assets/images/backgrounds/maintenance.svg';

const Maintenance = () => {
  return (
    <>
      <div className="h-screen flex items-center  justify-center bg-white dark:bg-card">
        <div className="text-center">
          <div className="max-w-3xl">
            <img src={maintenance} alt="网站维护插图" className="mb-4" width={500} height={500} />
          </div>
          <h1 className="text-foreground text-4xl mb-6">维护中</h1>
          <h6 className="text-xl text-foreground">网站正在建设中，请稍后再来！</h6>
          <Button className="mt-6 mx-auto">
            <Link to="/">返回首页</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
