import Home from "./Home";
import Projects from "./links/Projects";
import AboutMe from "./links/AboutMe";
import Header from "./Header";

export default function App() {
  return (
 <>
  <header className="fixed top-0 left-0 w-full z-50 bg-white shadow gap-12">
      <Header />
  </header>
  <br/>

  <main className="pt-[64px] flex flex-row overflow-x-scroll overflow-y-hidden w-[300vw] h-screen snap-x snap-mandatory scroll-smooth">
    <section className="w-screen h-full snap-start">
      <Home />
    </section>
    <section className="w-screen h-full snap-start">
      <Projects />
    </section>
    <section className="w-screen h-full snap-start">
      <AboutMe />
    </section>
  </main>
</>
  );
}
