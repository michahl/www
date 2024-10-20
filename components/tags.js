import { tags } from "@/config/constants";

export default function Tags() {
    return (
        <div className="flex gap-1 mx-3">
            {
                tags.map(tag => (
                    <div 
                        key={tag}
                        className="text-xs text-slate-500 hover:text-slate-700 border rounded-xl px-2 py-0.5 cursor-pointer"
                    >
                        {tag}
                    </div>
                ))
            }
        </div>
    )
}