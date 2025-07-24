import { getPostsMeta } from "@/utils/getPosts";
import { PostListByCategory } from "@/components/posts/posts-by-category";

export default async function CategoriesPage() {

    const posts = await getPostsMeta();

    return (
        <div>
            <PostListByCategory posts={posts} />
        </div>
    );
}