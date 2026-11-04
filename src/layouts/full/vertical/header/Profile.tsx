import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetClose,
} from 'src/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import { Icon } from '@iconify/react';

import { cn } from 'src/lib/utils';
import { Mailbox } from 'lucide-react';

import { profileDD } from './data';
import { Link } from 'react-router';
import avatar from '@/assets/images/profile/avtar.webp';
export default function ProfileSheet() {
  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger
        aria-label="打开账户菜单"
        className="cursor-pointer hover:bg-primary/5 flex items-center justify-center rounded-full h-10 w-10"
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatar} alt="用户头像" />
          <AvatarFallback>陈</AvatarFallback>
        </Avatar>
      </SheetTrigger>

      {/* Drawer Panel */}
      <SheetContent
        showCloseButton={false}
        side="right"
        className="border-s-0 w-full sm:max-w-80 max-w-60"
      >
        <SheetClose
          aria-label="关闭账户菜单"
          className="absolute top-5 end-5 p-2 hover:bg-primary/5 hover:text-primary rounded-full"
        >
          <Icon icon="tabler:x" width={20} height={20} />
        </SheetClose>
        {/* Top Profile Section */}
        <div className="p-6 py-6">
          <div className="flex flex-col gap-4 justify-center items-center pt-10">
            <Avatar className="h-16 w-16">
              <AvatarImage src={avatar} alt="个人资料" width={30} height={30} />
              <AvatarFallback>陈</AvatarFallback>
            </Avatar>

            <div className="text-center">
              <h6 className="text-lg font-semibold">陈晨</h6>
              <div className="flex items-center gap-2 justify-center">
                <Mailbox size={18} className="text-muted-foreground" />
                <span className="text-sm font-normal text-muted-foreground">
                  info@shadcndashboard.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="border-t  border-border">
          <ul className="flex flex-col gap-2 p-6">
            {profileDD.map((item) => (
              <li key={item.title} className="group">
                <Link
                  to={item.href}
                  className={cn(
                    'flex gap-3 py-2 px-3 rounded-md group-hover:bg-primary/5 text-muted-foreground',
                  )}
                >
                  <item.avatar width={20} height={20} className="group-hover:text-primary" />

                  <div className="flex gap-3 items-center">
                    <h6 className="text-sm group-hover:text-primary">{item.title}</h6>

                    {item.badge && (
                      <span className="h-5 w-6 text-sm flex justify-center items-center text-primary rounded-sm bg-primary/5">
                        4
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <SheetFooter className="px-0 pb-6">
          <div className="border-t border-border w-full">
            <div className="pt-6 flex justify-center">
              <Button
                variant="secondary"
                render={<Link to="/auth/auth2/login" />}
                className="text-primary"
              >
                退出登录
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
