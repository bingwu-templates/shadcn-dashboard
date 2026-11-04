import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

const Page = () => {
  const [time, setTime] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [website, setWebsite] = useState('www.tailwind-admin.com');
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(website);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-px">
      <div className="flex flex-col gap-px">
        {/* Default Inputs */}
        <div className="md:p-6 p-4 bg-background">
          <h5 className="card-title">基础输入框</h5>
          <div className="mt-6 flex flex-col gap-6">
            {/* Basic Input */}
            <div>
              <Label htmlFor="name">输入框</Label>
              <Input id="name" type="text" required className="mt-2" />
            </div>

            {/* Input with placeholder */}
            <div>
              <Label htmlFor="firstname">带占位提示的输入框</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="请输入名字"
                required
                className="mt-2"
              />
            </div>

            {/* Select */}
            <div>
              <Label htmlFor="countries">下拉选择框</Label>
              <Select>
                <SelectTrigger className="mt-2 w-full">
                  <SelectValue placeholder="请选择一项" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">美国</SelectItem>
                  <SelectItem value="ca">加拿大</SelectItem>
                  <SelectItem value="fr">法国</SelectItem>
                  <SelectItem value="de">德国</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">密码输入框</Label>
              <Input
                id="password"
                type="password"
                placeholder="请输入密码"
                required
                className="mt-2"
              />
            </div>

            {/* Datepicker */}
            <div className="flex flex-col gap-3">
              <Label htmlFor="date" className="px-1">
                出生日期
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-full justify-between font-normal hover:bg-transparent focus:border-primary"
                  >
                    {date
                      ? date.toLocaleDateString('zh-CN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : '选择日期'}
                    <Icon icon="solar:calendar-minimalistic-linear" width={18} height={18} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time */}
            <div>
              <Label htmlFor="time">时间选择框（24 小时制）</Label>
              <div className="mt-2 flex items-center gap-2">
                <Select
                  value={time.slice(0, 2) || null}
                  onValueChange={(hour) => {
                    if (hour) setTime(`${hour}:${hour === '18' ? '00' : time.slice(3) || '00'}`);
                  }}
                >
                  <SelectTrigger id="time" aria-label="小时" className="flex-1">
                    <SelectValue placeholder="时" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, index) =>
                      String(index + 9).padStart(2, '0'),
                    ).map((hour) => (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span aria-hidden="true">:</span>
                <Select
                  value={time.slice(3) || null}
                  onValueChange={(minute) => {
                    if (minute) setTime(`${time.slice(0, 2) || '09'}:${minute}`);
                  }}
                >
                  <SelectTrigger aria-label="分钟" className="flex-1">
                    <SelectValue placeholder="分" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: time.startsWith('18') ? 1 : 60 }, (_, index) =>
                      String(index).padStart(2, '0'),
                    ).map((minute) => (
                      <SelectItem key={minute} value={minute}>
                        {minute}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Card Input with Icon */}
            <div>
              <Label htmlFor="card">卡片</Label>
              <div className="relative mt-2">
                <Icon
                  icon="uim:master-card"
                  width="20"
                  height="20"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <Input id="card" type="text" placeholder="卡号" className="pl-10!" />
              </div>
            </div>
          </div>
        </div>

        {/* Textarea */}
        <div className="bg-background md:p-6 p-4 gap-px">
          <h5 className="card-title">多行文本框</h5>
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <Label htmlFor="comment">描述</Label>
              <Textarea id="comment" placeholder="留下你的评论…" rows={4} className="mt-2" />
            </div>

            <div>
              <Label htmlFor="disabled-comment">描述</Label>
              <Textarea
                id="disabled-comment"
                placeholder="已禁用"
                disabled
                rows={4}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="error-comment" className="text-red-600">
                描述
              </Label>
              <Textarea
                id="error-comment"
                placeholder="留下你的评论…"
                rows={4}
                className="border-red-600 text-red-600 focus-visible:border-red-600 mt-2"
              />
            </div>
          </div>
        </div>

        {/* Input Colors */}
        <div className="bg-background gap-px md:p-6 p-4">
          <h5 className="card-title">输入框颜色</h5>
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <Label htmlFor="warning" className="text-warning">
                警告
              </Label>
              <Input id="warning" placeholder="警告输入框" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="info" className="text-info">
                提示
              </Label>
              <Input id="info" placeholder="提示输入框" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="success" className="text-success">
                成功
              </Label>
              <Input id="success" placeholder="成功输入框" className="mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col gap-px">
        {/* Input Group with Icons */}
        <div className="bg-background md:p-6 p-4">
          <h5 className="card-title">输入框组合</h5>
          <div className="mt-6 flex flex-col gap-6">
            <div className="relative">
              <Icon
                icon="solar:letter-linear"
                width={18}
                height={18}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <Input type="email" placeholder="name@example.com" className="pl-10!" />
            </div>

            <div className="relative">
              <Icon
                icon="solar:phone-rounded-linear"
                width={18}
                height={18}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <Input type="tel" placeholder="+1" className="pl-10!" />
            </div>

            <div className="relative">
              <Icon
                icon="solar:global-linear"
                width={18}
                height={18}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <Input type="text" placeholder="www.example.com" className="pl-10!" />
            </div>

            <div className="relative">
              <Icon
                icon="solar:link-round-angle-linear"
                width={18}
                height={18}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <Input type="text" placeholder="www.tailwind-admin.com" className="pl-10!" />
            </div>

            {/* Copy input */}
            <div>
              <Label htmlFor="website">网站</Label>
              <div className="flex gap-2 mt-2">
                <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 text-sm rounded-md border border-ld bg-primary/10 dark:bg-primary/10 text-primary hover:bg-gray-200"
                >
                  {copied ? '已复制' : '复制'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* File Input */}
        <div className="bg-background md:p-6 p-4">
          <h5 className="card-title">文件输入框</h5>
          <Input
            ref={fileInputRef}
            type="file"
            aria-label="选择文件"
            className="hidden"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
          />
          <div className="mt-6 flex items-center gap-3">
            <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
              选择文件
            </Button>
            <span className="min-w-0 truncate text-sm text-muted-foreground" role="status">
              {fileName || '未选择文件'}
            </span>
          </div>
        </div>

        {/* Checkbox */}
        <div className="bg-background md:p-6 p-4">
          <h5 className="card-title">复选框</h5>
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Checkbox id="default" />
              <Label htmlFor="default">默认</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="checked" defaultChecked />
              <Label htmlFor="checked">已勾选</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled">已禁用</Label>
            </div>
          </div>
        </div>

        {/* Radio */}
        <div className="bg-background md:p-6 p-4">
          <h5 className="card-title">单选按钮</h5>
          <RadioGroup defaultValue="default" className="mt-6 flex gap-6">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="default" />
              <Label htmlFor="default">默认</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="selected" id="selected" />
              <Label htmlFor="selected">已选中</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="disabled" id="disabled" disabled />
              <Label htmlFor="disabled">已禁用</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Switch */}
        <div className="bg-background md:p-6 p-4 h-full">
          <h5 className="card-title">开关</h5>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Switch checked={switch1} onCheckedChange={setSwitch1} />
              <Label>切换开关</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={switch2} onCheckedChange={setSwitch2} />
              <Label>切换开关（已开启）</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch disabled />
              <Label>已禁用</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked disabled />
              <Label>已禁用（已开启）</Label>
            </div>
            <Switch checked={switch3} onCheckedChange={setSwitch3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
