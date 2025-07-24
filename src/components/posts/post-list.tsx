import type { BlogPostMeta } from "@/types/blog-post";
import { PostListItem } from "./post-list-item";

export function PostList({ posts }: { posts: Array<BlogPostMeta & { slug: string }> }) {
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <PostListItem key={post.slug} post={post} />
                ))}
            </ul>
        </div>
    );
}
