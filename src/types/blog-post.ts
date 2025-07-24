import { MDXContent } from "mdx/types";

export type Category = "Programming" | "Music" | "Madness" | "Media" | "The Spiral" | "Other";

export type BlogPostMeta = {
    title: string;
    date: string;
    tags: string[];
    category: Category;
    summary?: string;
};

export type Slug = {
    slug: string;
}

export type BlogPost = {
    default: MDXContent;
    meta: BlogPostMeta;
};
