import "./App.css";
import About from "./Components/body/about/About";
import Contact from "./Components/body/contact/Contact";
import Education from "./Components/body/education/Education";
import Experience from "./Components/body/experience/Experience";
import Home from "./Components/body/home/Home";
import Projects from "./Components/body/project/Project";
import Skills from "./Components/body/skills/Skills";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/Header";

function App() {
  return (
    <div className="first-line:home bg-slate-800 overflow-hidden">
      <Header />
      <div className="html-Tags max-w-7xl mx-auto relative">
        <Home />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
