import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className={'grid min-h-[80dvh] place-items-center'}>
            <div className={'flex flex-col gap-2 items-start'}>
                <h1 className={'font-heading text-2xl'}>404 Not Found</h1>
                <p>this has not yet been created in this dimension</p>
                <Link
                    className={'lowercase text-semibold text-sm rounded-md border-1 border-slate-600 hover:bg-background-light px-2 py-2 cursor-pointer'}
                    href={'/'}>Go Home</Link>
            </div>
        </main>
    );
}