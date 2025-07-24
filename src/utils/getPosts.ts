import { readdir } from "node:fs/promises";
import { BlogPostMeta, BlogPost } from "@/types/blog-post";

export const getPostsMeta = async () => {
    const files = await readdir("./src/posts", { withFileTypes: false });
    const posts: Array<BlogPostMeta & { slug: string }> = [];
    for (const mdxSlug of files) {
        const { meta } = (await import(`@/posts/${mdxSlug}`)) as BlogPost;
        const slug = mdxSlug.replace(/\.mdx$/, "");
        posts.push({ slug, ...meta });
    }
    return posts;
};

export const getPostBySlug = async (slug: string) => {
    try {
        const file = await import(`@/posts/${slug}.mdx`) as BlogPost;
        return file ?? null;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const getPostsByCategory = async (category: string) => {
    try {
        const files = await getPostsMeta();
        console.log(files);
        return files.filter((post) => post.category.toLowerCase() === category.toLowerCase());
    } catch (e) {
        console.error(e);
        return null;
    }
}