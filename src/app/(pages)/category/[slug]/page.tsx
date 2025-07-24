import { getPostsByCategory } from "@/utils/getPosts";
import { notFound } from "next/navigation";
import { PostListItem } from "@/components/posts/post-list-item";
import { properCase } from "@/utils/properCase";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const posts = await getPostsByCategory(slug);
    if (!posts) notFound();

    return (
        <div>
            <h2 className={'text-3xl'}>{properCase(slug)}</h2>
            {posts.map((post) => (<PostListItem key={post.slug} post={post} withCategory={false} />))}
        </div>
    );

}