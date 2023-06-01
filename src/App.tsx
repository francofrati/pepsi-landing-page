import Navbar from "./components/navbar"
import Section1 from "./components/section1"
import Section2 from "./components/section2"


function App() {

  return (
    <>
      <Navbar />
      <main
        className="w-full flex flex-col pt-[100px] z-[10]"
      >
        <Section1 />
        <Section2 />
      </main>
    </>
  )
}

export default App
