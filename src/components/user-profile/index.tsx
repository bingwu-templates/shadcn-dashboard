import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import StyleDivider from '../shared/StyleDivider';
import { Link } from 'react-router';
import avatar from '@/assets/images/profile/avtar.webp';

const UserProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<'personal' | 'address' | null>(null);

  const BCrumb = [
    {
      to: '/',
      title: '首页',
    },
    {
      title: '个人资料',
    },
  ];

  const [personal, setPersonal] = useState({
    firstName: '晨',
    lastName: '林',
    email: 'mathew.anderson@gmail.com',
    phone: '(347) 528-1947',
    position: '团队负责人',
    facebook: 'https://www.facebook.com/wrappixel',
    twitter: 'https://x.com/shadcndashboard',
    github: 'https://github.com/shadcndashboard',
    dribbble: 'https://dribbble.com/wrappixel',
  });

  const [address, setAddress] = useState({
    location: '美国',
    state: '美国加利福尼亚州圣迭戈',
    pin: '92101',
    zip: '30303',
    taxNo: 'GA45273910',
  });

  const [tempPersonal, setTempPersonal] = useState(personal);
  const [tempAddress, setTempAddress] = useState(address);

  useEffect(() => {
    if (openModal && modalType === 'personal') {
      setTempPersonal(personal);
    }
    if (openModal && modalType === 'address') {
      setTempAddress(address);
    }
  }, [openModal, modalType, personal, address]);

  const handleSave = () => {
    if (modalType === 'personal') {
      setPersonal(tempPersonal);
    } else if (modalType === 'address') {
      setAddress(tempAddress);
    }
    setOpenModal(false);
  };

  const socialLinks = [
    {
      href: 'https://www.facebook.com/wrappixel',
      icon: 'streamline-logos:facebook-logo-2-solid',
    },
    {
      href: 'https://x.com/shadcndashboard',
      icon: 'streamline-logos:x-twitter-logo-solid',
    },
    { href: 'https://github.com/shadcndashboard', icon: 'ion:logo-github' },
    {
      href: 'https://dribbble.com/wrappixel',
      icon: 'streamline-flex:dribble-logo-remix',
    },
  ];

  return (
    <div className="flex flex-col p-px bg-border gap-px">
      <BreadcrumbComp title="个人资料" items={BCrumb} />
      <StyleDivider />
      <div className="flex flex-col gap-px bg-border">
        <Card className="p-6 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 rounded-xl relative w-full break-words">
            <div>
              <img
                src={avatar}
                alt="个人资料图片"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center w-full">
              <div className="flex flex-col sm:text-left text-center gap-1.5">
                <h5 className="card-title">
                  {personal.lastName}
                  {personal.firstName}
                </h5>
                <div className="flex flex-wrap items-center gap-1 md:gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{personal.position}</p>
                  <div className="hidden h-4 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{address.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    target="_blank"
                    className="flex h-11 w-11 items-center justify-center gap-2 rounded-full shadow-md border border-border hover:bg-gray-50 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                  >
                    <Icon icon={item.icon} width="20" height="20" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-px">
          <div className="space-y-6 bg-background md:p-6 p-4 relative w-full break-words">
            <h5 className="card-title">个人信息</h5>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="text-xs text-gray-500">名</p>
                <p>{personal.firstName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">姓</p>
                <p>{personal.lastName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">邮箱</p>
                <p>{personal.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">电话</p>
                <p>{personal.phone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">职位</p>
                <p>{personal.position}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  setModalType('personal');
                  setOpenModal(true);
                }}
                className="flex items-center gap-1.5 rounded-md"
              >
                <Icon icon="ic:outline-edit" width="18" height="18" /> 编辑
              </Button>
            </div>
          </div>

          <div className="space-y-6 bg-background md:p-6 p-4 relative w-full break-words">
            <h5 className="card-title">地址信息</h5>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="text-xs text-gray-500">位置</p>
                <p>{address.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">省／州</p>
                <p>{address.state}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">个人识别码</p>
                <p>{address.pin}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">邮政编码</p>
                <p>{address.zip}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">联邦税号</p>
                <p>{address.taxNo}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  setModalType('address');
                  setOpenModal(true);
                }}
                className="flex items-center gap-1.5 rounded-md"
              >
                <Icon icon="ic:outline-edit" width="18" height="18" /> 编辑
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="mb-4">
              {modalType === 'personal' ? '编辑个人信息' : '编辑地址信息'}
            </DialogTitle>
          </DialogHeader>

          {modalType === 'personal' ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName">名</Label>
                <Input
                  id="firstName"
                  placeholder="名"
                  value={tempPersonal.firstName}
                  onChange={(e) =>
                    setTempPersonal({
                      ...tempPersonal,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lastName">姓</Label>
                <Input
                  id="lastName"
                  placeholder="姓"
                  value={tempPersonal.lastName}
                  onChange={(e) =>
                    setTempPersonal({
                      ...tempPersonal,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  placeholder="邮箱"
                  value={tempPersonal.email}
                  onChange={(e) => setTempPersonal({ ...tempPersonal, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">电话</Label>
                <Input
                  id="phone"
                  placeholder="电话"
                  value={tempPersonal.phone}
                  onChange={(e) => setTempPersonal({ ...tempPersonal, phone: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="position">职位</Label>
                <Input
                  id="position"
                  placeholder="职位"
                  value={tempPersonal.position}
                  onChange={(e) =>
                    setTempPersonal({
                      ...tempPersonal,
                      position: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="facebook">Facebook 链接</Label>
                <Input
                  id="facebook"
                  placeholder="Facebook 链接"
                  value={tempPersonal.facebook}
                  onChange={(e) =>
                    setTempPersonal({
                      ...tempPersonal,
                      facebook: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="twitter">Twitter 链接</Label>
                <Input
                  id="twitter"
                  placeholder="Twitter 链接"
                  value={tempPersonal.twitter}
                  onChange={(e) =>
                    setTempPersonal({
                      ...tempPersonal,
                      twitter: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="github">GitHub 链接</Label>
                <Input
                  id="github"
                  placeholder="GitHub 链接"
                  value={tempPersonal.github}
                  onChange={(e) => setTempPersonal({ ...tempPersonal, github: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="dribbble">Dribbble 链接</Label>
                <Input
                  id="dribbble"
                  placeholder="Dribbble 链接"
                  value={tempPersonal.dribbble}
                  onChange={(e) =>
                    setTempPersonal({
                      ...tempPersonal,
                      dribbble: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="location">位置</Label>
                <Input
                  id="location"
                  placeholder="位置"
                  value={tempAddress.location}
                  onChange={(e) => setTempAddress({ ...tempAddress, location: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="state">省／州</Label>
                <Input
                  id="state"
                  placeholder="省／州"
                  value={tempAddress.state}
                  onChange={(e) => setTempAddress({ ...tempAddress, state: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pin">个人识别码</Label>
                <Input
                  id="pin"
                  placeholder="个人识别码"
                  value={tempAddress.pin}
                  onChange={(e) => setTempAddress({ ...tempAddress, pin: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="zip">邮政编码</Label>
                <Input
                  id="zip"
                  placeholder="邮政编码"
                  value={tempAddress.zip}
                  onChange={(e) => setTempAddress({ ...tempAddress, zip: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="taxNo">联邦税号</Label>
                <Input
                  id="taxNo"
                  placeholder="联邦税号"
                  value={tempAddress.taxNo}
                  onChange={(e) => setTempAddress({ ...tempAddress, taxNo: e.target.value })}
                />
              </div>
            </div>
          )}

          <DialogFooter className="flex gap-2 mt-4">
            <Button className="rounded-md" onClick={handleSave}>
              保存更改
            </Button>
            <Button
              className="rounded-md bg-lighterror dark:bg-darkerror text-error hover:bg-error hover:text-white"
              onClick={() => setOpenModal(false)}
            >
              关闭
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProfile;
