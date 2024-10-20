import { projects } from "@/config/constants"
import Link from "next/link"
import { Icons } from "./icons"

export default function Projects() {
    return (
        <div>
            <p className="border-b pb-1">projects</p>

            <div className="grid grid-cols-2 gap-1.5 mt-3">
                {
                    projects.map(project => (
                        <Link
                            key={project.title}
                            href={project.href}
                            target="_blank"
                            className="group flex justify-between items-center text-[0.95rem] border rounded-lg px-5 py-3.5 hover:bg-zinc-50 hover:shadow-sm"
                        >
                            <div>
                                <h3 className="font-[410]">
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