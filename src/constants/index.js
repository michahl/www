const projects = [
  {
    name: 'BugScout',
    url: 'https://bugscout.michahl.com',
    description: 'Designed to help developers discover good first issues.'
  }

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
        content: `<div>
  <p>In JavaScript itself, there are lots of ways to write functions. Add TypeScript to the mix and all of a sudden it's a lot to think about. So with the help of&nbsp;<a href="https://gist.github.com/kentcdodds/61176c067ec5250b5bd3c7fe57a0120d" rel="noopener noreferrer" target="_blank">some</a>&nbsp;<a href="https://twitter.com/kentcdodds/status/1365046763892084736" rel="noopener noreferrer" target="_blank">friends</a>, I've put together this list of various function forms you'll typically need/run into with simple examples.</p>
  <p><br /></p>
  <p>Keep in mind that there are TONS of combinations of different syntaxes. I only include those which are less obvious combinations or unique in some way.</p>
  <p>First, the biggest confusion I always have with the syntax of things is where to put the return type. When do I use&nbsp;:&nbsp;and when do I use&nbsp;=&gt;. Here are a few quick examples that might help speed you up if you're using this post as a quick reference:</p>
  <pre class="ql-syntax language-Javascript rounded-sm bg-zinc-800 px-2 py-2 text-sm text-zinc-50" spellcheck="false">
// Simple type for a function, use =&gt;
type FnType = (arg: ArgType) =&gt; ReturnType

// Every other time, use :
type FnAsObjType = {
	(arg: ArgType): ReturnType
}
interface InterfaceWithFn {
	fn(arg: ArgType): ReturnType
}

const fnImplementation = (arg: ArgType): ReturnType =&gt; {
	/* implementation */
}
</pre
  >
  <br />
  <p>I think that was the biggest source of confusion for me. Having written this, now I know that the only time I use&nbsp;=&gt; ReturnType&nbsp;is when I'm defining a function type as a type in itself. Any other time, use&nbsp;: ReturnType.</p>
  <p>Continue reading for a bunch of examples of how this plays out in typical code examples.</p>
  <p><br /></p>
  <h2><a href="https://kentcdodds.com/blog/typescript-function-syntaxes#function-declarations" rel="noopener noreferrer" target="_blank">Function declarations</a></h2>
  <pre class="ql-syntax language-Javascript rounded-sm bg-zinc-800 px-2 py-2 text-sm text-zinc-50" spellcheck="false">
// inferred return type
function sum(a: number, b: number) {
	return a + b
}
// defined return type
function sum(a: number, b: number): number {
	return a + b
}
</pre
  >
  <p>In the examples below, we'll be using explicit return types, but you technically don't have to specify this.</p>
  <p><br /></p>
  <h2><a href="https://kentcdodds.com/blog/typescript-function-syntaxes#function-expression" rel="noopener noreferrer" target="_blank">Function Expression</a></h2>
  <pre class="ql-syntax language-Javascript rounded-sm bg-zinc-800 px-2 py-2 text-sm text-zinc-50" spellcheck="false">
// named function expression
const sum = function sum(a: number, b: number): number {
	return a + b
}
// annonymous function expression
const sum = function (a: number, b: number): number {
	return a + b
}
// arrow function
const sum = (a: number, b: number): number =&gt; {
	return a + b
}
// implicit return
const sum = (a: number, b: number): number =&gt; a + b
// implicit return of an object requires parentheses to disambiguate the curly braces
const sum = (a: number, b: number): { result: number } =&gt; ({ result: a + b })
</pre
  >
  <h4>
    <a href="https://kentcdodds.com/blog/typescript-function-syntaxes" rel="noopener noreferrer" target="_blank"><strong>Source</strong></a>
  </h4>
  <h6>(<em>content was used for testing purposes</em>)</h6>
</div>
`,
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
