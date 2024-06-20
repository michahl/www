import { tags } from '../constants'

const Tags = () => {
  return (
    <div className="flex justify-start flex-wrap">
        {tags.map( (item) => (
          <div key={item.id} className="flex items-center space-x-2 mr-1 my-1 px-3 py-2 bg-1 border-[1px] border-6 rounded-full select-none">
            <img src={item.icon} alt={item.text} width={12} height={12}/>
            <div className="font-tag text-tag text-[#3D3D3D] font-semibold">{item.text}</div>
          </div>
        ))}
      </div>
  )
}

export default Tags