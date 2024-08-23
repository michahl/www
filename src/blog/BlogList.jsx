import { useState, useEffect } from 'react'
import info from '../constants/index'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const arrBlogs = Object.entries(info.blogs).map(([url, blog]) => ({
      url,
      ...blog
    }))
    setBlogs(arrBlogs)
  }, [])

  return (
    <div className='w-full flex flex-col justify-start items-center min-h-screen relative'>
      <div className='w-full max-w-3xl mt-20'>
        <div className='mx-10 lg:mx-0 selection:bg-slate-700 selection:text-white'>
          <div className='flex justify-end'>
            <a href="/" className='mt-2 flex flex-row items-center space-x-1.5 hover:bg-zinc-200 hover:rounded-md px-3 py-2 ease-in-out duration-300 transition-all'>
              <svg className='w-3' fill="#000000" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.44"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"></path></g></svg>
              <p className='text-sm'>Go home</p>
            </a>
          </div>
          <h1 className='border-b pb-2 mb-5 font-medium'>Blog Posts 📖</h1>

          {
            blogs.map((blog, index) => (
              <div key={index} className='mb-5'>
                <a href={`/blog/${blog.url}`} className='flex flex-row justify-between items-center'>
                  <div>
                    <p className='hover:underline'>{blog.title}</p>
                    <p className='text-sm text-zinc-600'>{blog.shortDescription}</p>
                  </div>
                  <p className='text-xs'>{blog.date}</p>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BlogList