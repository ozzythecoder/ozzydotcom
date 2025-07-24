import { MDXContent, MDXComponents } from "mdx/types";
import { components } from "./components";
import clsx from "clsx";

interface Props {
    Post: MDXContent,
    componentOverrides?: MDXComponents
}

export function MdxPost({ Post, componentOverrides = {} }: Props) {

    return (
        <article className={
            clsx(
                'prose md:prose-lg prose-headings:my-2 prose-p:text-black prose-li:text-black',
                'prose-ul:p-0 prose-li:list-inside prose-li:list-["#_"]',
                'prose-li:p-0 prose-li:my-0.25 prose-li:marker:text-slate-600 prose-li:marker:text-sm min-w-full',
                'prose-pre:p-0 prose-pre:m-0 prose-a:decoration-slate-400 prose-a:text-slate-600 prose-a:hover:decoration-black prose-a:hover:text-black',
            )
        }>
            <Post components={{ ...components, ...componentOverrides }} />
        </article>
    );
}