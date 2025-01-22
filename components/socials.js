import { socialLinks } from "@/lib/constants";

export default function Socials() {
    return (
        <div className="flex justify-center">
            <div className="mb-5">
                <div className="flex">
                {
                    socialLinks.map((social, index) => (
                    <a 
                        key={index} 
                        target="_blank"
                        href={social.href}
                        className={`
                            text-[#d9d9d9] hover:text-[#f9f8fc] transition-colors
                            flex items-center justify-center p-1
                            
                        `}
                    >
                        {/*
                        <social.icon className="p-3 rounded-md w-10 h-10" />
                        */}
                        <p className="p-3">{social.title}</p>
                    </a>
                    ))
                }
                </div>
            </div>
        </div>
    )
}