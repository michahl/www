import { socialLinks } from "@/config/constants";

export default function Socials() {
    return (
        <div className="flex justify-center">
            <div className="fixed bottom-5">
                <div className="flex flex-row border rounded-lg">
                {
                    socialLinks.map((social, index) => (
                    <a 
                        key={index} 
                        target="_blank"
                        href={social.href}
                        className={`
                            flex items-center justify-center p-3.5
                            hover:bg-zinc-50 rounded-l-lg
                            ${index + 1 === socialLinks.length ? 'rounded-r-lg' : 'border-r'}
                        `}
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                    ))
                }
                </div>
            </div>
        </div>
    )
}