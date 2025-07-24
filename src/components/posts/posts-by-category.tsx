import { BlogPostMeta, Category, Slug } from "@/types/blog-post";
import { PostListItem } from "./post-list-item";
import { useMemo } from "react";

interface Props {
    posts: Array<BlogPostMeta & { slug: string }>;
}

type CategoryPostMeta = Omit<BlogPostMeta & Slug, 'category'>

export function PostListByCategory({ posts }: Props) {

    const postMetaByCategory = useMemo(() => posts.reduce((prev: Record<string, any>, curr) => {
            return {
                ...prev,
                [curr.category]: [
                    ...(prev[curr.category] ?? []),
                    {
                        ...curr,
                        category: undefined,
                    },
                ],
            };
        }, {}) as Record<Category, Array<CategoryPostMeta>>,
        [posts],
    );

    return (
        <div className={'gutter'}>
            {Object.entries(postMetaByCategory).map(([category, metas]) =>
                (<div key={category}>
                    <details className={'group'}>
                        <summary className={'group-open:marker:content-["V"] marker:content-[">"]'}>
                            <h2 className={'inline text-2xl font-bold tracking-tight'}>
                                {category}
                            </h2>
                        </summary>
                        {metas.map((meta) =>
                            // @ts-expect-error whatever
                            <PostListItem className={'list-none'} key={meta.slug} post={meta} withCategory={false} />,
                        )}
                    </details>
                </div>),
            )}
        </div>
    );

}
