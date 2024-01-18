import { Header } from "./components/navigation/Header";
import { About } from "./page/About";
import { Hero } from "./page/Hero";
import { Projects } from "./page/Projects";

function App() {

  return (
    <>
  <Header/>
    <Hero/>
    <About/>
    <Projects/>
    </>
  );
}

export default App;
