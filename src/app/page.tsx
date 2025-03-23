import About from "@/components/About"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"



function Home() {
  return (
    < >
      <section className="w-3/4 max-w-full mx-auto min-h-screen">

    <Hero/>
      </section>
      <section className="w-3/4 max-w-full mx-auto min-h-screen  ">

    <About/>
      </section>
      <section className="w-3/4 max-w-full mx-auto text-white">
        <Skills/>
      </section>

    </>
  )
}

export default Home