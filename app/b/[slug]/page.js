import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access } from "fs/promises";
import { notFound } from "next/navigation";
import MdxLayout from "@/components/mdx-layout";

const POSTS_FOLDER = path.join(process.cwd(), "posts");

async function readPostFile(slug) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

export default async function PostPage({ params }) {
  const markdown = await readPostFile(params.slug);

  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-2xl w-full mx-2 sm:mx-5">
        <div className="mt-14">
          <article>
            <h1 className="leading-4">{frontmatter.title}</h1>
            <p className="text-[#d9d9d9] font-light text-[16px]">Michail Christoforatos</p>
            <div className="mt-10">
              <MdxLayout>{content}</MdxLayout>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
