import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export function Title({ children, className = '', heading = 'h1' }: Props) {

    const Heading = heading;

    const standardStyles = {
        h1: 'text-5xl font-bold tracking-tighter',
        h2: 'text-4xl font-bold tracking-tight',
        h3: 'text-3xl font-bold tracking-tight',
        h4: 'text-2xl font-bold tracking-tight',
        h5: 'text-xl font-bold',
        h6: 'text-lg font-bold',
    }[heading]

    return (
        <Heading className={clsx(standardStyles, className)}>
            {children}
        </Heading>
    );
}