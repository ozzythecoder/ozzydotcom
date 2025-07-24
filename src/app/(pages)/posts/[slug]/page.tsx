import { readdir } from "node:fs/promises";
import { BackButton } from "@/components/back-button";
import { getPostBySlug } from "@/utils/getPosts";
import { notFound } from "next/navigation";
import { MdxPost } from "@/components/mdx/MdxPost";
import { Title } from "@/components/title";
import DateCategory from "@/components/mdx/date-category";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();
    const { default: Post } = post;

    return (
        <>
            <main className={"min-w-full"}>
                <BackButton href={"/posts"} />
                <Title className={'mb-4'}>{post.meta.title}</Title>
                <DateCategory date={post.meta.date} category={post.meta.category} />
                <hr className={'my-4 border-slate-500/20 mx-auto max-w-[90%]'} />
                <MdxPost Post={Post} />
            </main>
        </>
    );
}

export async function generateStaticParams() {
    const posts = await readdir("./src/posts", { withFileTypes: false });
    return posts.map((slug) => ({ params: { slug } }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return post ? {
        title: post.meta.title,
        description: post.meta.summary,
    } : {
        title: "404 Not Found",
    };
}