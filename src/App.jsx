import assets from './assets/index'

const App = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center md:pt-40 pt-20 min-h-screen'>
      <div className='w-full max-w-3xl'>
        <div className='mx-10 md:mx-0 selection:bg-slate-700 selection:text-white'>
          <div className='flex flex-row justify-start items-start mb-1 w-full'>
            <div className='flex flex-row justify-between items-center w-full mb-2'>

              <div className='flex flex-row justify-start items-center'>
                <h1 className='text-lg text-slate-900 mr-20'>Michail Christoforatos</h1>

                <div className='gap-2 flex flex-row justify-start items-center mx-4'>
                <a href="https://twitter.com/cht5m" target='_blank' className='h-4 w-4 text-slate-600 hover:text-slate-700 transition-colors'><img src={assets.twitter} alt="twitter" /></a>
                <a href="https://linkedin.com/in/michahl" target='_blank' className='h-4 w-4 text-slate-600 hover:text-slate-700 transition-colors'><img src={assets.linkedin} alt="linkedin" /></a>
                <a href="https://github.com/michahl" target='_blank' className='h-4 w-4 text-slate-600 hover:text-slate-700 transition-colors'><img src={assets.github} alt="github" /></a>
              </div>  
              </div>            
            </div>
          </div>
          <p className='text-sm text-slate-500'>
            Software Engineer proficient in building digital products. Skilled with tools like VSCode, Postman, and Git. Experienced with Next.js, TypeScript, React, Tailwind, Node, Express, MongoDB, and SQL. Currently learning Swift. I enjoy football, gaming, and spending time with my family.
          </p>
          <div className='flex flex-col justify-start items-start mt-10'>
            <div className='mb-4'>
              <div className='flex flex-row justify-start items-center gap-2 w-fit mb-1'>
                <img src={assets.code} alt="code" width={20}/>
                <p className='text-slate-700 text-sm'>Projects</p>
              </div>

            </div>

            <div className='flex flex-col ga-6'>
              <div className='flex flex-col'>
                <a href=""
                   target='_blank'
                   className='text-slate-500 hover:text-slate-700 hover:border-slate-700 text-sm border-b transition-colors mb-2 w-fit group flex flex-row items-center'
                >
                  Project name
                  <img src={assets.open} alt="open"
                      className='w-3 h-3 text-slate-500 ml-1 group-hover:text-slate-700'
                  />
                </a>
                <p className='text-sm text-slate-500'>Project description</p>

              </div>

            </div>

          </div>
          <div className='flex flex-col justify-start mt-10'>
            <div>
              <div className='flex items-center'>
                {/*<img src={assets.pointer} alt="pointer" className='w-4 h-4 mr-1' />*/}
                <p className='text-sm text-slate-500'>Sparti, Greece</p>
              </div>
              <a href="mailto:hi@michahl.com" className='text-sm text-slate-700'>hi@michahl.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App