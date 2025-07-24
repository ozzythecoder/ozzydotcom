import type { BlogPostMeta, Slug } from "@/types/blog-post";
import Link from "next/link";

type Props = {
    post: BlogPostMeta & Slug;
    withCategory?: boolean;
    className?: string;
}

export function PostListItem({ className, post, withCategory = true }: Props) {

    const dateColor = getDateColor(new Date(post.date));

    return (
        <li className={className}>
            <Link className={"group"} href={`/posts/${post.slug}`}>
                <div
                    className={"py-2 pl-1 bg-slate-600/10 group-hover:bg-slate-300/30 border-t-1 rounded-b-md mb-2 relative"}>
                    <h3 className={`w-full text-3xl  group-hover:underline group-hover:decoration-link-underline ${dateColor}`}>
                        {post.title}
                    </h3>
                    <p className={'text-sm text-slate-600'}>
                        {post.date}
                        {withCategory && ` | ${post.category}`}
                    </p>
                    {post.summary && <p className={"text-sm"}>{post.summary}</p>}
                </div>
            </Link>
        </li>
    );
}

function getDateColor(postDate: Date) {
    const dateColorMap = {
        today: "text-red-800",
        oneWeek: "text-orange-800",
        oneMonth: "text-green-800",
        threeMonths: "text-blue-800",
        default: "text-indigo-800",
    };

    const ONE_DAY = 1000 * 60 * 60 * 24;
    const ONE_WEEK = ONE_DAY * 7;
    const ONE_MONTH = ONE_DAY * 30.4; // average number of days in a month
    const THREE_MONTHS = ONE_MONTH * 3;
    const ONE_YEAR = ONE_DAY * 365;

    const age = Number(new Date()) - Number(postDate);

    console.log('postDate:', Number(postDate));
    console.log('new Date():', Number(new Date()));

    switch (true) {
        case age < ONE_DAY:
            return dateColorMap.today;
        case age < ONE_WEEK:
            return dateColorMap.oneWeek;
        case age < ONE_MONTH:
            return dateColorMap.oneMonth;
        case age < THREE_MONTHS:
            return dateColorMap.threeMonths;
        case age < ONE_YEAR:
        default:
            return dateColorMap.default;
    }
}
