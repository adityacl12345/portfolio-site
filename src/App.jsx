import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Art from "./pages/Art";
import Footer from "./components/Footer";
//import Home from "./pages/Home"; // if you have one

function App() {
  return (
    <Router basename="/portfolio-site/">
      <Navbar />
      <main className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-600">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/projects" element={<Projects />} exact />
          <Route path="/gallery" element={<Art />} exact />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;