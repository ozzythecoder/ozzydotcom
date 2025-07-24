import { PostList } from "@/components/posts/post-list";
import { getPostsMeta } from "@/utils/getPosts";
import { Title } from "@/components/title";

export default async function Page() {
    const postsMetadata = await getPostsMeta();
    postsMetadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div>
            <Title heading={'h1'} className={'my-2'}>words</Title>
            <p className={'text-sm'}>a hopeful chatter into the dark</p>
            <PostList posts={postsMetadata} />
        </div>
    );
}
