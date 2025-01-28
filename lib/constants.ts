export const tags: string[] = [
    "Software Developer",
    "Fullstack Developer",
];

export interface Project {
    title: string;
    description: string;
    href: string;
}

export const projects: Project[] = [
    {
        title: "good-first-issue",
        description: 'find "good first issues" on github',
        href: "https://bugscout.michahl.com"
    }
];

import { LuMails } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

export interface SocialLink {
    title: string;
    href: string;
    icon?: React.ComponentType;
}

export const socialLinks: SocialLink[] = [
    {
        title: "@michahl",
        href: "/"
    },
    {
        title: "email",
        href: "mailto:hi@michahl.com",
        icon: LuMails
    },
    {
        title: "github",
        href: "https://github.com/michahl",
        icon: FiGithub
    }
];