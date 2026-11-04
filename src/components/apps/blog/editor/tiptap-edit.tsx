import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { Underline } from '@tiptap/extension-underline';
import { OrderedList } from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import {
  Bold,
  Code,
  Italic,
  Link2,
  List,
  ListOrdered,
  Redo,
  Underline as UnderlineIcon,
  Undo,
  Image as ImageIcon,
} from 'lucide-react';

// Add your own styles (optional)
import './Tiptap.css';

const MyEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Image,
      Underline,
      OrderedList,
      OrderedList,
      BulletList,
      ListItem,
    ],
    content: '<p>开始输入内容…</p>',
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
    immediatelyRender: false,
  });

  // Toolbar button click handlers
  const handleBold = () => editor?.chain().focus().toggleBold().run();
  const handleItalic = () => editor?.chain().focus().toggleItalic().run();
  const handleUnderline = () => editor?.chain()?.focus()?.toggleUnderline()?.run();
  const handleH1 = () => editor?.chain().focus().toggleHeading({ level: 1 }).run();
  const handleH2 = () => editor?.chain().focus().toggleHeading({ level: 2 }).run();
  const handleH3 = () => editor?.chain().focus().toggleHeading({ level: 3 }).run();
  const handleList = () => editor?.chain().focus().toggleBulletList().run();
  const handleOrderedList = () => editor?.chain().focus().toggleOrderedList().run();
  const handleLink = () => {
    const url = prompt('输入链接地址');
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };
  const handleImage = () => {
    const url = prompt('输入图片地址');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };
  const handleCodeBlock = () => editor?.chain().focus().toggleCodeBlock().run();
  const handleUndo = () => editor?.chain().focus().undo().run();
  const handleRedo = () => editor?.chain().focus().redo().run();

  return (
    <div className="editor-container">
      {/* Toolbar */}
      <div className="toolbar flex gap-5 flex-wrap">
        <button type="button" aria-label="加粗" title="加粗" onClick={handleBold}>
          <Bold
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="斜体" title="斜体" onClick={handleItalic}>
          <Italic
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="下划线" title="下划线" onClick={handleUnderline}>
          <UnderlineIcon
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="一级标题" title="一级标题" onClick={handleH1}>
          <span className="text-sm font-medium  hover:text-primary dark:hover:text-primary">
            H1
          </span>
        </button>
        <button type="button" aria-label="二级标题" title="二级标题" onClick={handleH2}>
          <span className="text-sm font-medium  hover:text-primary dark:hover:text-primary">
            H2
          </span>
        </button>
        <button type="button" aria-label="三级标题" title="三级标题" onClick={handleH3}>
          <span className="text-sm font-medium  hover:text-primary dark:hover:text-primary">
            H3
          </span>
        </button>
        <button type="button" aria-label="无序列表" title="无序列表" onClick={handleList}>
          <List
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="有序列表" title="有序列表" onClick={handleOrderedList}>
          <ListOrdered
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="插入链接" title="插入链接" onClick={handleLink}>
          <Link2
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="插入图片" title="插入图片" onClick={handleImage}>
          <ImageIcon
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="代码块" title="代码块" onClick={handleCodeBlock}>
          <Code
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="撤销" title="撤销" onClick={handleUndo}>
          <Undo
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button type="button" aria-label="重做" title="重做" onClick={handleRedo}>
          <Redo
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
      </div>

      {/* Editor content area */}
      <EditorContent editor={editor} />

      {/* Displaying the raw HTML content for testing */}
      <div className="output">
        <h3>输出结果</h3>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
};

export default MyEditor;
