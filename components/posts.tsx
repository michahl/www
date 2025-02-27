import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Posts() {
    const posts = getAllPosts();

    return (
        <div className="mx-3.5">
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
    );
}

const postsDirectory = path.join(process.cwd(), "posts");

function getAllPosts() {
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