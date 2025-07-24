"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const links: { href: string; label: string }[] = [
    {
        href: "/posts",
        label: "words",
    },
    {
        href: "#",
        label: "Music",
    },
    {
        href: "#",
        label: "Projects",
    },
    {
        href: "/about",
        label: "About",
    },
];

export function Header() {
    const pathName = usePathname();
    const [open, navOpen] = useState(false);

    // close navbox when navigating
    useEffect(() => {
        navOpen(false);
    }, [pathName]);

    return (
        <header className={"p-4 gutter flex flex-row justify-between items-center relative"}>
            <div
                data-menu-open={open}
                aria-hidden={true}
                onClick={() => navOpen(false)}
                className={"data-[menu-open=true]:block z-10 hidden bg-transparent transition-colors data-[menu-open=true]:bg-black/5 absolute top-0 left-0 h-screen w-screen sm:hidden"}></div>
            <button
                type="button"
                aria-expanded={open}
                tabIndex={0}
                data-open={open}
                className={'sm:hidden data-[open=true]:rotate-45 transition-transform duration-200 motion-reduce:duration-[0s]'}
                onClick={() => navOpen((p) => !p)}
            >
                <span className={'tracking-tighter'} aria-hidden={true}>{"(+)"}</span>
            </button>
            <nav
                data-open={open}
                className={"max-sm:data-[open=false]:-translate-x-[200px] ease-out z-20 sm:z-0 px-1 sm:px-0 data-[open=true]:translate-x-0 sm:translate-0 transition-transform duration-200 bg-background sm:bg-transparent absolute top-12 border border-black sm:border-none sm:static sm:block"}>
                <ul className={"flex flex-col sm:flex-row sm:gap-6"}>
                    {links.map(({ href, label }, i) => {
                        return (
                            <li key={`${href}-${i}`}>
                                <Link
                                    className={
                                        "lowercase w-full inline-block my-1 sm:py-0 text-lg font-semibold data-[current=true]:underline hover:underline hover:decoration-slate-500"
                                    }
                                    data-current={href.split("/")[1] === pathName.split("/")[1] && href !== "/"}
                                    href={href}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <Link href={"/"}>
                <h1 className={"font-heading font-semibold text-xl"}>ozzy://</h1>
            </Link>
        </header>
    );
}
