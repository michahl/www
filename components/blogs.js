import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function Blogs() {
    const posts = getAllPosts();

    return (
        <div className="mt-5 mx-3.5">
            <p className="">journal</p>

            <ul className="list-disc list-inside">
                {
                    posts.map(post => (
                        <li key={post.slug} className="">
                            <Link
                                href={`/b/${post.slug}`}
                                className="text-blue-600 hover:text-blue-800"
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