import About from "@/components/About"
import Hero from "@/components/Hero"



function Home() {
  return (
    < >
      <section className="w-3/4 max-w-full mx-auto min-h-screen">

    <Hero/>
      </section>
      <section className="w-3/4 max-w-full mx-auto  ">

    <About/>
      </section>

    </>
  )
}

export default Home