interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className={'relative'}>
            {children}
            <span
                aria-hidden={'true'}
                className={'leading-0 -z-10 text-slate-100/70 drop-shadow-amber-400 drop-shadow-2xl fixed top-32 right-0 font-mono tracking-[-6rem] sm:tracking-[-8rem] text-[20rem] sm:text-[32rem]'}
            >
                &lt;...&gt;
            </span>
        </div>
    );
};