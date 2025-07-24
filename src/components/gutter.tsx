export function Gutter({ children }: { children?: React.ReactNode }) {

    return (
        <div className={"mt-4 gutter flex flex-col gap-2"}>
            {children}
        </div>
    );
}