import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

interface BlogPageItemProps {
    params: {
        slug: string;
    };
}

export function getAllPosts() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    return fs.readdirSync(postsDirectory)
    .filter((filename) => filename !== "template.mdx" && filename.endsWith(".mdx"))
    .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);


        return {
            slug: filename.replace(".mdx", ""),
            title: data.title || "Untitled",
            date: data.date || "Unknown Date",
            description: data.description || "",
            image: data.image || "",
            author: data.author || "Unknown Author", 
            keywords: data.keywords || [],
        };
    });
}

export async function getBlogFromParams(params: BlogPageItemProps["params"]) {
    const filePath = path.join(postsDirectory, `${params.slug}.mdx`);

    try {
        const fileContent = await fs.promises.readFile(filePath, "utf-8");
        const { content, data } = matter(fileContent);
        return { content, data };
    } catch (error) {
        return null; // If file does not exist, return null
    }
}

export function calculateReadingTime(content: string) {
    const wordsPerMinute = 238;
    const words = content.split(" ").length;
    const minutes = words / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
}