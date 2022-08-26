import NavBar from "./components/navbar/Navbar";
import Home from "./components/header/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
};

export default App;
