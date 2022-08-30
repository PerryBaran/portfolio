import NavBar from "./components/navbar/Navbar";
import Home from "./components/header/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

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
      <Footer/>
    </div>
  );
};

export default App;
