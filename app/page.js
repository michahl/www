import Blogs from "@/components/blogs";
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
              <p>
                Inspired by{" "}
                <span 
                  className="relative group cursor-pointer italic"
                >
                  <span className="hover:underline underline-offset-4">Shuhari</span>
                  <span className="hover:hidden absolute -top-7 left-12 sm:left-1/2 transform -translate-x-1/2 w-[16.5rem] bg-[#1c1c1c] text-[#cccccc] text-center px-1 py-0.5 border border-[#575757] text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    (n.) philosophy of learning to mastering
                  </span>
                </span>
                , I embrace the stages of learning to continually enhance my skills and knowledge while exploring innovative approaches.
              </p>
            </div>
          </div>
          <Projects />
          <Blogs />
        </div>
      </div>
      <Socials />
    </div>
  );
}
