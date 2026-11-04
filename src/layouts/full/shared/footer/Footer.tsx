import { Link } from 'react-router';

type SearchType = {
  title: string;
  href: string;
};

const searchSugg: SearchType[] = [
  { title: '技术支持', href: 'https://shadcndashboard.dev/support' },
  { title: '许可证', href: 'https://shadcndashboard.dev/license' },
];

export default function Footer() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-3 text-center">
      <p className="text-sm text-muted-foreground">
        © 2026 版权所有{' '}
        <Link
          to="https://www.wrappixel.com/"
          target="_blank"
          className="hover:text-primary text-muted-foreground"
        >
          shadcndashboard
        </Link>
        ，为你打造更好的网络体验。
      </p>

      <div className="flex gap-4">
        {searchSugg.map((item, index) => (
          <Link
            key={index}
            target="_blank"
            to={item.href}
            className="text-sm hover:text-primary text-muted-foreground"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
