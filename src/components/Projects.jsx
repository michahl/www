import data from '../constants/index'
import assets from '../assets/index'

const Projects = () => {
   if (data.projects.length > 0) return (
        <div className='flex flex-col mt-5'>
            <div className='animate-fade_3 border-b pb-1'>
              <p className='text-slate-900'>projects 🏗️</p>
            </div>

            <div className='flex flex-col gap-6 animate-fade_4 mt-3'>
              {
                data.projects.map( project => (
                    <div className='flex flex-col' key={project.name}>
                        <a  href={project.url}
                            target='_blank'
                            className='text-slate-500 hover:text-slate-700 hover:border-slate-700 text-sm border-b transition-colors mb-2 w-fit group flex flex-row items-center'
                        >
                            {project.name}
                            <img src={assets.open} alt="open"
                                className='w-3 h-3 text-slate-500 ml-1 group-hover:text-slate-700'
                            />
                        </a>
                        <p className='text-sm text-slate-500'>{project.description}</p>
                    </div>
                ))
              }
            </div>

        </div>
    
    
    )
}

export default Projects
