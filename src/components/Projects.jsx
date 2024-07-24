import data from '../constants/index'
import assets from '../assets/index'

const Projects = () => {
    return (
        <div className='flex flex-col justify-start items-start mt-10'>
            <div className='mb-4'>
              <div className='flex flex-row justify-start items-center gap-2 w-fit mb-1 animate-fade_3'>
                <img src={assets.code} alt="code" width={20}/>
                <p className='text-slate-700 text-sm'>Projects</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 animate-fade_4'>
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