import clsx from "clsx";

export function CodeBlock({ children, language = "typescript" }: { children: React.ReactNode; language?: string }) {
    return (
        <div
            className={
                clsx(
                    "not-prose mx-auto bg-slate-800 text-white rounded-lg px-6 py-4",
                    "inset-shadow-black inset-shadow-sm overflow-scroll",
                )
            }
        >
            <code className={"font-mono text-lg font-semibold"} lang={language}>
                {children}
            </code>
        </div>
    );
}
