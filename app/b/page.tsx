import Posts from "@/components/posts";
import Socials from "@/components/socials";
import Link from "next/link";

export default function Page() {
    

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="max-w-2xl w-full mx-2 sm:mx-5 flex-grow">
                <div className="my-14">
                    <div className="mx-2.5">
                        <div className="text-zinc-300">
                            <Link href="/">@</Link>
                            <span> / </span>
                            <Link href="/b" className="text-blue-500 hover:text-blue-700">blog</Link>
                        </div>
                        <p className="mb-5 text-[15px] font-light">
                            Check all the posts I have wrote so far.
                        </p>
                        
                    </div>
                    <Posts />
                </div>
            </div>
            <Socials />
        </div>
    )
}


