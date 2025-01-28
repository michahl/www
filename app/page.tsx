import Projects from "@/components/projects";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <div className="max-w-2xl w-full mx-2 sm:mx-5 flex-grow">
        <div className="my-14">
          <div className="mx-3.5">
            <h1>Michail Christoforatos</h1>
            <div className="my-10 text-[15px] font-light">
              <p>
                I&#39;m a <span className="italic font-serif cursor-context-menu">Software Developer</span> who believes in building creative and modern apps. 
              </p>
            </div>
          </div>
          <Projects />
          {/*}
          <Blogs />
          */}
        </div>
      </div>
      <Socials />
    </div>
  );
}
