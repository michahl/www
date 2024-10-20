import data from '../constants/index'
import assets from '../assets/index'
import { TiArrowRight } from "react-icons/ti";

const Projects = () => {
   if (data.projects.length > 0) return (
        <div className='flex flex-col mt-5'>
            <div className='animate-fade_3 border-b pb-1'>
              <p className='text-slate-900'>projects</p>
            </div>

            <div className='grid grid-cols-1 gap-2 animate-fade_4 mt-2'>
              {
                data.projects.map( project => (
                    <a 
                        href={project.url}
                        target='_blank'
                        className='flex flex-row items-center justify-between rounded-xl group' 
                        key={project.name}
                    >
                        <div>
                            <p  
                                className='font-[430] text-slate-500 group-hover:text-slate-700 text-sm transition-colors w-fit group flex flex-row items-center'
                            >
                                {project.name}
                            </p>
                            <p className='text-sm text-slate-500 leading-tight'>{project.description}</p>
                        </div>
                        <TiArrowRight 
                            className='
                                w-4 h-4 
                                text-slate-500 group-hover:text-slate-700
                                -rotate-45 group-hover:rotate-0 transition-all ease-in-out
                            ' 
                        />
                    </a>
                ))
              }
            </div>

        </div>
    
    
    )
}

export default Projects
