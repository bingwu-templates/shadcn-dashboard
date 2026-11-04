import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TiptapEdit from '../editor/tiptap-edit';

const GeneralDetail = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h5>文章详情</h5>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="prednm">
                文章标题
                <span className="text-destructive ">*</span>
              </Label>
            </div>
            <Input id="prednm" type="text" placeholder="文章标题" />
            <small className="text-xs text-muted-foreground">
              请输入文章标题，建议使用不重复的标题。
            </small>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="desc">内容</Label>
            </div>
            <TiptapEdit />
            <small className="text-xs  text-muted-foreground">
              完善文章内容，让读者更好地了解主题。
            </small>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GeneralDetail;
