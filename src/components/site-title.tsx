import { ReactNode } from "react";

export function SiteTitle({ children }: { children: ReactNode }) {

    return (
        <div className={'md:-translate-x-4 -translate-x-2 overflow-clip'}>
            <h1 className={"text-8xl sm:text-[10rem] md:text-[12rem] leading-none font-bold font-heading tracking-tighter gradient-text"}>
                {children}
            </h1>
        </div>
    );
}
