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
        <p className='border-b pb-1'>latest blog 📖</p>

        <a href={`https://blog.michahl.com/blog/${post.url}`} target='_blank'>
            <div className='flex flex-row justify-between items-center text-sm mt-2 group cursor-pointer animate-fade_4'>
                <div className='flex flex-col'>
                  <p className='group-hover:underline text-slate-900'>{post.title}</p>
                  <p className='text-slate-600'>{post.shortDes}</p>
                </div>
                <p className='text-xs text-slate-900'>{post.date}</p>
            </div>
        </a>

    </div>
  )
}

export default Blogs