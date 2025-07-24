import Link from "next/link";

export default function DateCategory({ date, category }: { date: string, category: string }) {
    return <p className={'text-sm text-slate-700'}>
        {`${date} | `}
        <Link className={'underline decoration-slate-400 hover:text-black hover:decoration-black'}
              href={`/category/${category}`}>
            {category}
        </Link>
    </p>;
}
