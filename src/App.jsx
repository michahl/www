const App = () => {
  return (
    <div className="font-body mx-5 mt-3">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-sm text-slate-700">
          <div className="flex space-x-2 font-medium mb-4">
            <a href="/" className="text-blue-700 underline underline-offset-4">@</a>
            <p>/</p>
            <a href="https://github.com/michahl" target="_blank" className="text-blue-700 underline underline-offset-4">github</a>
            <p>/</p>
            <a href="https://blog.michahl.com" target="_blank" className="text-blue-700 underline underline-offset-4">blog</a>
          </div>

          <div className="mb-5">
            <div className="mb-4">
                {/*
                <h1 
                  className="text-[1.5rem] tracking-tight font-semibold group">
                  hi 
                  <span className="select-none inline-block transition-transform duration-500 
                             ease-in-out group-hover:rotate-12 mx-1.5">
                    👋
                  </span>
                  i'm michahl
                  <span className="text-blue-700">.</span>
                </h1>
                */}

                    <div>
                      <h1 className="text-xl tracking-tighter mb-3">projects</h1>

                      <div className="mb-5">
                        <h2 className="text-lg text-blue-700 underline underline-offset-4">project name</h2>
                        <p className="text-md leading-4">project description</p>
                      </div>
                    </div>
                  </div>
          </div>
          <div>
            <a href="mailto:" className="text-blue-700">hi@michahl.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App