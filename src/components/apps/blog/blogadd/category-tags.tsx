import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { Plus, X } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const CategoryTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>('');

  const [Cats, setCats] = useState<string[]>([]);
  const [showCatOptions, setShowCatOptions] = useState<boolean>(false);
  const [catOptions] = useState<string[]>(['科技', '生活方式', '旅行', '美食', '商业', '社会']);

  const [showTagOptions, setShowTagOptions] = useState<boolean>(false);
  const [tagOptions] = useState<string[]>(['热门趋势', '技巧', '新闻', '指南', '热门']);

  const handleCatInputChange = () => {
    setShowCatOptions(true);
  };

  const handleCatInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.nativeEvent.isComposing && e.key === 'Enter' && Cats.length > 0) {
      setCats([]);
      setShowCatOptions(false);
    }
  };

  const handleCatClick = (option: string) => {
    if (!Cats.includes(option)) {
      setCats([...Cats, option]);
    }
    setShowCatOptions(false);
  };

  const handleCatDelete = (catToDelete: string) => {
    const updatedCats = Cats.filter((cat) => cat !== catToDelete);
    setCats(updatedCats);
  };

  const handleTagInputChange = () => {
    setShowTagOptions(true);
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleTagClick = (option: string) => {
    if (!tags.includes(option)) {
      setTags([...tags, option]);
    }
    setShowTagOptions(false);
  };

  const handleTagDelete = (tagToDelete: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h5>文章分类</h5>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="cat">
              分类
              <span className="text-destructive">*</span>
            </Label>
          </div>

          <div className="relative">
            <div className="flex flex-wrap items-center gap-1 min-h-[40px] w-full rounded-md border border-input bg-background px-2 py-1 focus-within:ring-1 focus-within:ring-primary">
              {Cats.map((cat, index) => (
                <span
                  key={index}
                  className="flex items-center rounded-full bg-primary/5 px-2 py-1 text-sm text-primary"
                >
                  {cat}
                  <X
                    size={12}
                    className="ml-1 cursor-pointer"
                    onClick={() => handleCatDelete(cat)}
                  />
                </span>
              ))}

              <input
                type="text"
                className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
                onFocus={handleCatInputChange}
                onKeyDown={handleCatInputKeyDown}
              />
            </div>

            <small className="text-xs text-muted-foreground">为文章选择分类。</small>

            {showCatOptions && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-card shadow-lg">
                {catOptions.map((option, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-3 py-2 hover:bg-muted"
                    onClick={() => handleCatClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-2">
          <Button variant="outline">
            <Plus size={18} /> 添加所选分类
          </Button>
        </div>

        <div className="mt-4">
          <div className="mb-2 block">
            <Label htmlFor="tags">标签</Label>
          </div>

          <div className="relative">
            <div className="flex flex-wrap items-center gap-1 min-h-[40px] w-full rounded-md border border-input bg-background px-2 py-1 focus-within:ring-1 focus-within:ring-primary">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className=" py-1 px-2 rounded-full text-primary bg-primary/5 flex items-center"
                >
                  {tag}
                  <X
                    onClick={() => handleTagDelete(tag)}
                    className="cursor-pointer ml-1"
                    size={12}
                  />
                </span>
              ))}

              <input
                type="text"
                className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
                onFocus={handleTagInputChange}
                onKeyDown={handleTagInputKeyDown}
              />
            </div>

            <small className="text-xs text-muted-foreground">为文章添加标签。</small>

            {showTagOptions && (
              <div>
                {tagOptions.map((option, index) => (
                  <div
                    key={index}
                    className="py-2 px-3 bg-hover cursor-pointer"
                    onClick={() => handleTagClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryTags;
