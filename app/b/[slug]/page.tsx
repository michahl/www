import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Socials from "@/components/socials";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx-components";

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

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPageItem({ params }: { params: { slug: string } }) {
    const filePath = path.join(postsDirectory, `${params.slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="max-w-2xl w-full mx-2 sm:mx-5 flex-grow">
                <div className="my-14 mx-3">
                    <article>
                        <h1 className="text-[17px] font-medium leading-tight">
                            {data.title}
                        </h1>
                        <p className="font-light text-[14.5px]">{data.author}</p>
                        <div className="mt-10 tracking-tight text-[15.5px]">
                            <MDXRemote source={content} components={MDXComponents} />
                        </div>
                    </article>
                </div>
            </div>
            <Socials />
        </div>
    );
}
