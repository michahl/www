import Projects from "@/components/projects";
import Socials from "@/components/socials";
import { tags } from "@/config/constants";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-2xl w-full mx-5">
        <div className="mt-14 relative">
          <h1>Michail Christoforatos</h1>
          {
            tags.map((tag, index) => (
              <div key={index}>
                <p>{tag}</p>
              </div>
            ))
          }
          <Projects />
          <Socials />
        </div>
      </div>
    </div>
  );
}
