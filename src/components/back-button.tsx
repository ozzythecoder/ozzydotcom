"use client";
import { useRouter } from "next/navigation";

export function BackButton({ href }: { href?: string }) {
    const router = useRouter();

    const handleClick = () => (href ? router.push(href) : router.back());

    return (
        <button
            className={"lowercase text-semibold text-sm rounded-md hover:bg-background-light p-2 cursor-pointer"}
            aria-label={"Go back"}
            onClick={handleClick}
        >
            <span aria-hidden={true}>{"<- "}</span>
            {`Back`}
        </button>
    );
}
