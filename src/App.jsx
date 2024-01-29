import { Header } from "./components/navigation/Header";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Hero } from "./page/Hero";
import { Projects } from "./page/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
