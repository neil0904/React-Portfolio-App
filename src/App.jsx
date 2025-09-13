import { Navbar, Hero, About, Tech, Experience, Projects, Contact, Footer } from "./components";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
      </div>
      <div className="container mx-auto px-8">
         <Navbar />
         <hr className="border-0 h-0.5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full" />
         <Hero />
         <About/>
         <Tech />
         <Experience />
         <Projects />
         <Contact />
         <Footer />
      </div>
     
    </div>
  );
}

export default App;
