import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { PerformersData } from '../table-data';
import { EllipsisVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BasicTable = () => {
  const tableActionData = [
    { icon: 'solar:add-circle-outline', listtitle: '添加' },
    { icon: 'solar:pen-new-square-broken', listtitle: '编辑' },
    { icon: 'solar:trash-bin-minimalistic-outline', listtitle: '删除' },
  ];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>基础表格</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col border rounded-md border-ld">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-sm font-semibold">负责人</TableHead>
                        <TableHead className="text-sm font-semibold">项目</TableHead>
                        <TableHead className="text-sm font-semibold">优先级</TableHead>
                        <TableHead className="text-sm font-semibold"></TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {PerformersData.map((item, index) => (
                        <TableRow key={index} className="border-b border-border">
                          <TableCell className="min-w-[200px]">
                            <div className="flex gap-3 items-center">
                              <img
                                src={item.profileImg}
                                alt="用户头像"
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full"
                              />
                              <div>
                                <h6 className="text-sm font-semibold mb-1">{item.username}</h6>
                                <p className="text-xs text-muted-foreground font-medium">
                                  {item.designation}
                                </p>
                              </div>
                            </div>
                          </TableCell>

                          <TableCell>
                            <p className="text-muted-foreground text-sm font-medium">
                              {item.project}
                            </p>
                          </TableCell>

                          <TableCell>
                            <Badge
                              className={`text-sm rounded-full py-1 px-3 justify-center ${item.bgcolor}`}
                            >
                              {item.priority}
                            </Badge>
                          </TableCell>

                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger>
                                <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                                  <EllipsisVertical size={22} />
                                </span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-40">
                                {tableActionData.map((action, idx) => (
                                  <DropdownMenuItem key={idx} className="flex gap-3 items-center">
                                    <span>{action.listtitle}</span>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BasicTable;
