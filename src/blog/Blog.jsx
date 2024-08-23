import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import info from '../constants/index'


const Blog = () => {
  const [blog, setBlog] = useState('')
  const { url } = useParams()

  useEffect(() => {
    setBlog(info.blogs[url])
  }, [])

  return (
    <div className='w-full flex flex-col justify-start items-center min-h-screen relative'>
      <div className='w-full max-w-3xl mt-5 lg:mt-14'>
        <div className='mx-10 lg:mx-0 selection:bg-slate-700 selection:text-white'>
          <div className='flex justify-end'>
            <a href="/blog" className='mt-2 flex flex-row items-center space-x-1.5 hover:bg-zinc-200 hover:rounded-md px-3 py-2 ease-in-out duration-300 transition-all'>
              <svg className='w-3' fill="#000000" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="1.44"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"></path></g></svg>
              <p className='text-sm'>See all posts</p>
            </a>
          </div>
          <div>
            <p className='text-xs text-zinc-500 mb-3'>Published on {blog.date}</p>

            <h1 className='border-b pb-2 mb-3 text-lg font-medium'>{blog.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}/>
          </div>
          <div className='flex justify-center items-center border-t my-5'>
            <a href="/blog" className='mt-2 flex flex-row items-center space-x-1.5 hover:bg-zinc-200 hover:rounded-md px-3 py-2 ease-in-out duration-300 transition-all'>
              <svg className='w-3' fill="#000000" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="1.44"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"></path></g></svg>
              <p className='text-sm'>See all posts</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog