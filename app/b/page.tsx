import Posts from "@/components/posts";
import Socials from "@/components/socials";
import Link from "next/link";

export default function Page() {
    

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="max-w-2xl w-full mx-2 sm:mx-5 flex-grow">
                <div className="my-14">
                    <div className="mx-2.5">
                        <div>
                            <Link href="/">Michail Christoforatos</Link>
                            <span className="select-none"> / </span>
                            <Link href="/b" className="text-blue-500 hover:text-blue-900">Blog</Link>
                        </div>
                        <p className="mb-5 text-[15px] font-light">
                            Check all the blog posts I have wrote so far.
                        </p>
                        <Posts />
                    </div>
                </div>
            </div>
            <Socials />
        </div>
    )
}


