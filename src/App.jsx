import styles from "./App.module.css";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { About } from "./components/About.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className={styles.App} id="about">
      <div className={styles.Nav}>
        <Navbar />
      </div>
      <div className={styles.Main}>
        <About />
        <Education />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
