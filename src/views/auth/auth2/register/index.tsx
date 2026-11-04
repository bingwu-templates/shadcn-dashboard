import { Card } from '@/components/ui/card';

import { Link } from 'react-router';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';
import SocialButtons from '../../authforms/social-buttons';

const BoxedRegister = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted">
        <div className="flex h-full justify-center items-center px-4">
          <Card className="md:w-112.5 w-full border-none shadow-lg p-6">
            <div className="mx-auto  w-fit">
              <FullLogo />
            </div>

            <SocialButtons />

            <form className="space-y-6 w-full">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-normal text-muted-foreground">
                    姓名 *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="请输入姓名"

                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-normal text-muted-foreground">
                    邮箱 *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="请输入邮箱"

                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-sm font-normal text-muted-foreground">
                    密码 *
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="请输入密码"

                    required
                  />
                </div>
              </div>
              <Button size="lg" className="w-full rounded-lg">
                注册
              </Button>
            </form>
            <div className="flex gap-2 text-base text-muted-foreground font-medium mt-4 items-center justify-center">
              <p>已有账户？</p>
              <Link
                to={'/auth/auth2/login'}
                className="text-primary/80 text-base hover:text-primary font-medium"
              >
                登录
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BoxedRegister;
