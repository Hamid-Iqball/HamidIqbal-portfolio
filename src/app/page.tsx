import About from "@/components/About"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"



function Home() {
  return (
    < >
      <section className="md:w-3/4 w-11/12 mx-auto min-h-screen">

    <Hero/>
      </section>
      <section className="md:w-3/4 w-11/12 mx-auto min-h-screen  ">

    <About/>
      </section>
      <section className=" mx-1 sm:w-3/4 max-w-full sm:mx-auto text-white">
        <Skills/>
      </section>
      <section className="text-white w-3/4 max-w-full mx-auto min-h-screen">
        <Projects/>
      </section>

    </>
  )
}

export default Home