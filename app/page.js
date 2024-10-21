import Blogs from "@/components/blogs";
import Projects from "@/components/projects";
import Socials from "@/components/socials";
import Tags from "@/components/tags";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen ">
      <div className="max-w-3xl w-full mx-2 sm:mx-5">
        <div className="mt-14 relative">
          <div className="flex items-baseline justify-between mx-3.5">
            <h1>Michail Christoforatos</h1>
          </div>
          <Projects />
          <Blogs />
          <Socials />
        </div>
      </div>
    </div>
  );
}
