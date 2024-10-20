import { projects } from "@/config/constants"
import Link from "next/link"
import { Icons } from "./icons"

export default function Projects() {
    return (
        <div className="mt-5">
            <p className="mx-3.5">projects</p>

            <div className="grid grid-cols-1 gap-1.5 mt-0.5">
                {
                    projects.map(project => (
                        <Link
                            key={project.title}
                            href={project.href}
                            target="_blank"
                            className="group flex justify-between items-center rounded-lg px-3.5 py-3 text-slate-600 hover:bg-zinc-100/80 transition-colors"
                        >
                            <div className="text-[0.9rem]">
                                <h3 className="font-[410] group-hover:text-slate-700 transition-colors">
                                    {project.title}
                                </h3>
                                <p>{project.description}</p>
                            </div>
                            <Icons.arrow className="w-3.5 h-3.5 group-hover:rotate-45 transition-all ease-in-out duration-500"/>
                        </Link>
                    ))

                }
            </div>

        </div>
    )
}