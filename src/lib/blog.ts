import type { BlogPostType } from 'src/types/apps/blog';

export function getBlogSlug(post: BlogPostType) {
  return (
    post.slug ||
    post.title
      ?.trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\p{L}\p{N}_-]+/gu, '') ||
    String(post.id ?? '')
  );
}
