import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import errorpage from '@/assets/images/backgrounds/404.svg';

const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <div className="text-center">
          <img src={errorpage} alt="错误页面插图" className="mb-20" width={500} height={500} />
          <h1 className="text-foreground text-4xl mb-6">哎呀！</h1>
          <h6 className="text-xl text-foreground">未找到你要访问的页面。</h6>
          <Button className="mt-6 mx-auto">
            <Link to="/">返回首页</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
