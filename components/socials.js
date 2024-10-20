import { socialLinks } from "@/config/constants";

export default function Socials() {
    return (
        <div className="flex justify-center">
            <div className="fixed bottom-5">
                <div className="flex flex-row  rounded-lg">
                {
                    socialLinks.map((social, index) => (
                    <a 
                        key={index} 
                        target="_blank"
                        href={social.href}
                        className={`
                            text-slate-600 hover:text-slate-800 transition-colors
                            flex items-center justify-center p-1
                            
                        `}
                    >
                        <social.icon className="p-3 rounded-md w-10 h-10" />
                    </a>
                    ))
                }
                </div>
            </div>
        </div>
    )
}