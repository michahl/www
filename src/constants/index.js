const projects = [

]

const tags = [
    'Software Engineer', 'Fullstack Developer'
]

const email = 'hi@michahl.com'

const blogs = {
    'typescript-function-syntaxes': {
        title: 'TypeScript Function Syntaxes',
        date: '23/08/2024',
        content: ``,
        shortDescription: 'examples of typescript function syntaxes'
    },
    'text': {
        title: 'test',
        date: '23/08/2024',
        content: ``,
        shortDescription: 'examples of typescript function test'
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
