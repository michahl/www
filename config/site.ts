interface SiteConfig {
    name: string;
    username: string;
    description: string;
    url: string;
    links: {
        github: string;
        email: string;
    };
}

export const siteConfig = {
    name: "Michail Christoforatos",
    username: "@michahl",
    description: "Software Developer",
    url: "https://michahl.com",
    links: {
        github: "https://github.com/michahl",
        email: "mailto:hi@michahl.com",
    }
};