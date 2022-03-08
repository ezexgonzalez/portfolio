import Nav from "./nav/Nav";
import Main from "./main/Main";
import Info from "./info/info";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Conctact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Info/>
      <Projects/>
      <Skills/>
      <Conctact/>
    </div>
  );
}

export default App;
