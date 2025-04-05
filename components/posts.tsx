import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Posts() {
    const posts = getAllPosts();

    if (posts.length === 0) {
        return <></>;
    }

    console.log(posts);

    return (
        <div className="mx-3.5">
            <h3>Notes</h3>
            <ul className="list-disc list-inside">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/b/${post.slug}`} className="text-blue-500 hover:text-blue-700 text-[15px] leading-4 -mt-1.5">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}