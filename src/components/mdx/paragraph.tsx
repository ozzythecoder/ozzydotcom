import { WithChildren } from "@/types";


export function Paragraph({ children }: WithChildren) {
    return <p className={'text-lg'}>{children}</p>;
}