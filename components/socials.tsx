import { socialLinks } from "@/lib/constants";

export default function Socials() {
    return (
        <footer className="mt-12 text-center">
            <div className="flex justify-center space-x-4 tracking-tight">
            {
                socialLinks.map((social, index) => (
                <a 
                    key={index} 
                    target={social.target}
                    href={social.href}
                    className="p-1 font-light text-[#d9d9d9e9] hover:text-[#f9f8fc] transition-colors duration-150"
                >
                    <p className="p-3">{social.title}</p>
                </a>
                ))
            }
            </div>
        </footer>
    )
}