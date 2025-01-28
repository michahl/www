import { projects } from "@/lib/constants"
import Link from "next/link"
import { Icons } from "./icons"

export default function Projects() {
  return (
    <div className="mt-5">
        <p className="mx-3.5">projects</p>
            <div className="grid grid-cols-1 gap-1 mt-0.5">
                {
                    projects.map(project => (
                        <Link
                            key={project.title}
                            href={project.href}
                            target="_blank"
                            className="group flex justify-between items-center rounded-lg px-3.5 py-3 hover:bg-zinc-900/65 transition-colors"
                        >
                            <div>
                                <h3 className="text-[15px] leading-4">
                                    {project.title}
                                </h3>
                                <p className="text-[15px] font-light">{project.description}</p>
                            </div>
                            <Icons.arrow className="text-[#a0a0a0] w-3.5 h-3.5 group-hover:rotate-45 transition-all ease-in-out duration-500"/>
                        </Link>
                    ))

                }
            </div>
        </div>
  );
}