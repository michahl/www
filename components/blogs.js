import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function Blogs() {
    const posts = getAllPosts();

    if (posts.length === 0) {
        return null;
    }

    return (
        <div className="mt-5 mx-3.5">
            <p className="">journal</p>

            <ul className="list-disc list-inside">
                {
                    posts.map(post => (
                        <li key={post.slug} className="text-sm">
                            <Link
                                href={`/b/${post.slug}`}
                                className="relative -left-0.5 sm:-left-1.5 text-base text-blue-600 hover:text-blue-800 transition-transform"
                            >
                                {post.frontmatter.title.toLowerCase()}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}