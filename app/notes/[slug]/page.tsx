import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getBlogFromParams } from "@/lib/posts";
import Socials from "@/components/socials";
import { Toaster } from 'sonner';
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import CustomMDXComponents from "@/components/mdx-components";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlogFromParams({ slug });

    if (!blog) {
        return {
            title: "Not Found",
            description: "The blog post you are looking for does not exist.",
        };
    }

    const { data } = blog;

    return {
        title: data.title,
        description: data.description,
        authors: [
            {
                name: data.author,
                url: siteConfig.url,
            }
        ],
        keywords: data.keywords || [],
        twitter: {
            title: data.title,
            description: data.description,
            images: data.image ? [data.image] : [],
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            title: data.title,
            description: data.description,
            images: data.image ? [data.image] : [],
        }
    };
}

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
                <div className="my-10 mx-3">
                    <article>
                        <h1 className="text-lg font-medium leading-tight">
                            {data.title}
                        </h1>
                        <Link href="/" className="inline-block">
                            <span className="font-light text-[15px]">{data.author}</span>
                        </Link>
                        <div className="mt-10 tracking-tight text-[15.5px]">
                            <MDXRemote source={content} components={CustomMDXComponents} />
                        </div>
                    </article>
                </div>
            </div>
            <Socials />
        </div>
    );
}