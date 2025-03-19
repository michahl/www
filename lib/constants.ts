export interface Project {
    title: string;
    description: string;
    href: string;
}

export const projects: Project[] = [
    {
        title: "good-first-issue",
        description: 'find "good first issues" on github',
        href: "https://good-first-issu.vercel.app"
    }
];

export interface SocialLink {
    title: string;
    href: string;
    target?: string;
}

export const socialLinks: SocialLink[] = [
    {
        title: "@michahl",
        href: "/"
    },
    {
        title: "email",
        href: "mailto:hi@michahl.com",
        target: "_blank"
    },
    {
        title: "github",
        href: "https://github.com/michahl",
        target: "_blank"
    }
];