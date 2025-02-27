import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Socials from "@/components/socials";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx-components";
import { Metadata } from "next";
import { Toaster } from 'sonner'

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

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface BlogPageItemProps {
    params: {
        slug: string;
    };
}

async function getBlogFromParams(params: BlogPageItemProps["params"]) {
    const filePath = path.join(postsDirectory, `${params.slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    return { content, data };
}

export async function generateMetadata({
    params,
}: BlogPageItemProps): Promise<Metadata> {
    const blog = await getBlogFromParams(params);

    if (!blog) {
        return {};
    }

    return {
        title: blog.data.title,
        description: blog.data.description,
        authors: {
            name: blog.data.author,
        },
        keywords: blog.data.keywords
    };
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
            <Toaster richColors position="top-center" />
            <div className="max-w-2xl w-full mx-2 sm:mx-5 flex-grow">
                <div className="my-14 mx-3">
                    <article>
                        <h1 className="text-lg font-medium leading-tight">
                            {data.title}
                        </h1>
                        <p className="font-light text-[15px]">{data.author}</p>
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
