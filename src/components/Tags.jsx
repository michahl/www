import data from '../constants/index'

const Tags = () => {
  return (
    <div className='flex flex-wrap justify-start mt-1 animate-fade_2'>
        {
            data.tags.map( tag => (
                <div key={tag} className='border rounded-xl hover:border-slate-300 px-2.5 py-0.5 my-0.5 md:my-0 mr-1 cursor-pointer select-none'>
                    <p className='text-sm text-slate-500 hover:text-slate-700'>{tag}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Tags