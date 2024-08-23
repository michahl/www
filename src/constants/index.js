const projects = [

]

const tags = [
    'Software Engineer', 'Fullstack Developer'
]

const email = 'hi@michahl.com'

const blogs = {
    'typescript-function-syntaxes': {
        title: 'TypeScript Function Syntaxes',
        ltitle: 'typescript function syntaxes',
        date: '23/08/2024',
        content: `<p class='text-blue-500'>testing</p>`,
        shortDescription: 'examples of typescript function syntaxes'
    }
}

const readingTime = (content) => {
    const wordsCount = content.trim().split(/\s+/).length

    return Math.ceil(wordsCount / 150)
}

export default {
    projects,
    tags,
    email,
    blogs,
    readingTime
}
