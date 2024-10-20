import { useState, useEffect } from 'react'

const Blogs = () => {
  const [post, setPost] = useState('')

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/michahl/blog/refs/heads/main/src/assets/index.js")
        .then(response => response.text())
        .then(text => {
            const sanitizedText = text.replace('export ', '')

            const wrappedText = `(function() { ${sanitizedText}; return blog; })()`

            const blog = eval(wrappedText);
            setPost(blog[0])
        })
        .catch(e => console.error(e))
  }, [])
  return (
    <div className='mt-5 animate-fade_3'>
        <p className='border-b pb-1'>posts</p>

        <a href={`https://blog.michahl.com/blog/${post.url}`} target='_blank'>
            <div className='flex flex-row justify-between items-center text-sm mt-2 group cursor-pointer animate-fade_4'>
                <ul className='list-disc list-inside'>
                  <li className='text-slate-500 group-hover:text-slate-700'>
                    <span className='text-blue-700/85 font-[425]'>{post.title}</span>
                  </li>
                </ul>
            </div>
        </a>

    </div>
  )
}

export default Blogs