import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access } from "fs/promises";
import { notFound } from "next/navigation";

const POSTS_FOLDER = path.join(process.cwd(), "posts");

// Function to read the MDX file based on the slug
async function readPostFile(slug) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath); // Ensure the file exists
  } catch (err) {
    return null; // Return null if file doesn't exist
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

export default async function PostPage({ params }) {
  const markdown = await readPostFile(params.slug); // Fetch the MDX content

  if (!markdown) {
    notFound(); // Trigger 404 if no post is found
  }

  // Compile the MDX file into a format ready for rendering
  const { content, frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true }, // Parse front matter
  });

  // Render the compiled MDX content along with any frontmatter
  return (
    <article>
      {/* Optionally use frontmatter */}
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <div>{content}</div> {/* Render the MDX content */}
    </article>
  );
}
