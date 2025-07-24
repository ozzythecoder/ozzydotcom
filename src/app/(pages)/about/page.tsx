import { MdxPost } from "@/components/mdx/MdxPost";
import AboutPost from './post.mdx';
import Image from "next/image";

export default async function Page() {

    return (
        <div className={'md:mb-0 mb-128'}>
            <MdxPost Post={AboutPost} />
            <Image width={'400'} height={'1200'} className="fixed bottom-0 right-0 -z-10" src={'/ozzy-pink.png'} alt="Ozzy in a digitized wash of pink" />
        </div>
    );
}