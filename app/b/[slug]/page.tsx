//import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getBlogFromParams } from "@/lib/posts";
import MDXComponents from "@/components/mdx-components";
import Socials from "@/components/socials";
import { Toaster } from 'sonner';
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

type Params = Promise<{ slug: string }>

export default async function BlogPageItem({ params }: { params: Params }) {
    const { slug } = await params;
    const blog = await getBlogFromParams({ slug });

    if (!blog) {
        return notFound();
    }
    const { content, data } = blog;

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