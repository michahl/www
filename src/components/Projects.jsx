import data from '../constants/index'
import assets from '../assets/index'

const Projects = () => {
   if (data.projects.length > 0) return (
        <div className='flex flex-col mt-5'>
            <div className='animate-fade_3 border-b pb-1'>
              <p className='text-slate-900'>projects 🏗️</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade_4 mt-3'>
              {
                data.projects.map( project => (
                    <a 
                        href={project.url}
                        target='_blank'
                        className='flex flex-col border p-3 rounded-xl group hover:bg-slate-50 hover:shadow-sm min-w-56' 
                        key={project.name}
                    >
                        <img src={project.img} alt={project.name} className='rounded-lg'/>
                        <div className='leading-tight mt-1.5'>
                            <p  
                                className='text-slate-500 group-hover:text-slate-700 border-b group-hover:border-slate-700 text-sm transition-colors mb-0.5 w-fit group flex flex-row items-center'
                            >
                                {project.name}
                            </p>
                            <p className='text-sm text-slate-500'>{project.description}</p>
                        </div>
                    </a>
                ))
              }
            </div>

        </div>
    
    
    )
}

export default Projects
