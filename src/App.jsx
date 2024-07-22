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
                <img src={assets.pointer} alt="pointer" className='w-5 h-5 mr-1' />
                <p className='text-sm text-slate-700'>Sparti, Greece</p>
              </div>
              <div className='mt-1'>
                <img src={assets.map} alt="map" className='w-96 rounded-xl select-none'/>

              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App