import { SiteTitle } from "@/components/site-title";
import { Clock } from "@/components/clock";
import { Tagline } from "@/components/tagline";
import { MdxPost } from "@/components/mdx/MdxPost";

export default async function Home() {
    const { default: IntroPost } = await import("@/app/intro.mdx");

    return (
        <div>
            <section className={'-z-10'}>
                <SiteTitle>Welcome to the Spiral</SiteTitle>
                <div
                    className={'mt-4 text-lg font-heading font-semibold tracking-tight md:text-3xl flex flex-col gap-4 md:gap-0 md:flex-row flex-nowrap justify-between'}>
                    <span className={'text-nowrap md:block hidden'}>the time is</span>
                    <Clock className={`scale-150 -z-20 ml-12 md:m-0 text-xl md:text-4xl h-fit w-fit`} />
                    <div className={'relative text-right'}>
                        <Tagline />
                        <h3 className={'absolute right-0 drop-shadow-amber-600 drop-shadow-2xl top-0 -translate-y-1/3 -z-10 text-5xl md:text-6xl text-slate-100'}>STATUS:</h3>
                    </div>
                </div>
            </section>
            <div className={"mt-8 gutter flex flex-col gap-2"}>
                <MdxPost Post={IntroPost} />
            </div>
        </div>
    );
}
