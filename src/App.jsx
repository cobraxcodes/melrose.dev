import Home from "./Home";
import Projects from "./links/Projects";
import AboutMe from "./links/AboutMe";
import Header from "./Header";
import GetInTouch from "./links/GetInTouch";

export default function App() {
  return (
    <>
      
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <Header />
      </header>

      
      <main className="flex flex-col sm:flex-row mt-2 w-full sm:w-[400vw] h-auto sm:min-h-[calc(90vh-4rem)] snap-x snap-mandatory scroll-smooth overflow-y-auto ">
        <section className="w-screen min-h-[calc(90vh-4rem)] snap-start md:mt-26 lg:mt-26 ">
          <Home />
        </section>
        <section className="w-screen min-h-[calc(90vh-4rem)] snap-start md:mt-10 lg:mt-10">
          <AboutMe />
        </section>
        <section className="w-screen min-h-[calc(90vh-4rem)] snap-start md:mt-10 lg:mt-10">
          <Projects />
        </section>
        <section className="w-screen min-h-[calc(60vh-4rem)] snap-start md:mt-15 lg:mt-15">
          <GetInTouch />
        </section>
      </main>
    </>
  );
}
