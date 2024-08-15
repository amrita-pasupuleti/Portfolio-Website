import styles from "./App.module.css";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { About } from "./components/About.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Navbar}>
        <Navbar />
      </div>
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
