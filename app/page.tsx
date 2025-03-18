import Posts from "@/components/posts";
import Projects from "@/components/projects";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col justfiy-between pt-0 md:pt-8 p-2 md:p-8">
      <main className="max-w-[38rem] mx-auto w-full space-y-6 flex-grow">
        <h1 className="mx-3.5 pt-12">Michail Christoforatos</h1>
        <p className="mx-3.5">
          I&#39;m a <span className="italic font-serif cursor-context-menu">Software Developer</span> who believes in building creative and modern apps. 
        </p>
        <Posts />
        <Projects />
      </main>
      <Socials />
    </div>
  );
}
