import About from "@/components/About"
import ContactForm from "@/components/ContactForm"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"



function Home() {
  return (
    < >
      <section className="lg:w-3/4 w-11/12 mx-auto h-auto mb-44 ">
      <div className="absolute -top-20 -right-20 w-1/4 h-screen bg-gradient-to-b from-[#3ad896]/10 via-[#54cc9a]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>
    <Hero/>
      </section>
      <section className="md:w-3/4 w-11/12 mx-auto min-h-screen mb-12 ">

    <About/>
      </section>
      <section className=" mx-1 sm:w-3/4 max-w-full sm:mx-auto text-white mb-12">
        <Skills/>
      </section>
      <section className="text-white w-full lg:w-3/4  max-w-full mx-auto min-h-screen mb-28">
        <Projects/>
      </section>
      <section className="text-white w-full  lg:w-4/5  max-w-full mx-auto h-auto mb-20 mt-32">
        <ContactForm/>
      </section>

    </>
  )
}

export default Home