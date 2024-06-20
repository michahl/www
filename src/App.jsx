import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center  bg-1">
        <div className="mx-5 mb-1">
          <Header />
          <About />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
