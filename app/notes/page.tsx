import Posts from "@/components/posts";
import Socials from "@/components/socials";
import Link from "next/link";

export default function Page() {
    

    return (
        <div className="h-dvh flex flex-col justify-between items-center pt-0 md:pt-8 p-2 md:p-8">
            <div className="max-w-2xl w-full mx-2 sm:mx-5 flex-grow">
                <div className="my-14">
                    <div className="mx-2.5 transition-colors ease-in-out duration-300">
                        <div className="hover:text-zinc-300">
                            <Link href="/">@michahl</Link>
                            <span className="text-zinc-300"> / </span>
                            <Link href="/b" className="text-blue-500 hover:text-blue-600">notes</Link>
                        </div>                        
                    </div>
                    <Posts />
                </div>
            </div>
            <Socials />
        </div>
    )
}


