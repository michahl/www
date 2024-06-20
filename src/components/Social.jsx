import { social } from "../constants"

const Social = () => {
  return (
    <div className="flex flex-row items-center">
        {social.map( (item) => (
            <div key={item.id} className="mr-3 select-none">
                <a href={item.url} target="_blank" className="text-2">
                    <img src={item.icon} alt={item.name} width={30} height={30}/>
                </a>
            </div>
        ))}
    </div>
  )
}

export default Social