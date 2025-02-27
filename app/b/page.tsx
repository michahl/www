import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";

export default function Page() {
    const posts = getAllPosts();
    

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

                        <div>
                            <h3>posts</h3>
                            <ul className="list-disc list-inside">
                                {posts.map((post) => (
                                    <li key={post.slug}>
                                        <Link href={`/b/${post.slug}`} className="text-blue-500">
                                            {post.title.toLowerCase()}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
    return fs.readdirSync(postsDirectory).map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
            slug: filename.replace(".mdx", ""),
            ...data,
        };
    });
}
