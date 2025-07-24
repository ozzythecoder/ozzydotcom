import { Gutter } from "@/components/gutter";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <Gutter>{children}</Gutter>
    </div>;
}