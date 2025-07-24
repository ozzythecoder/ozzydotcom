import { CodeBlock } from "@/components/code-block";
import { Title } from "@/components/title";
import { WithChildren } from "@/types";

export const components = {
    code: CodeBlock,
    h1: ({ children }: WithChildren) => <Title heading={'h1'} children={children} />,
    h2: ({ children }: WithChildren) => <Title heading={'h2'} children={children} />,
    h3: ({ children }: WithChildren) => <Title heading={'h3'} children={children} />,
    h4: ({ children }: WithChildren) => <Title heading={'h4'} children={children} />,
    h5: ({ children }: WithChildren) => <Title heading={'h5'} children={children} />,
    h6: ({ children }: WithChildren) => <Title heading={'h6'} children={children} />,
}