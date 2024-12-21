import { useState, useEffect, type FC } from "react";
import Projects from "./pages/Projects/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./common/components/ScrollToTop";
import AppNavbar from "./common/components/AppNavbar";
import PreLoader from "./common/components/PreLoader";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

const App: FC = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PreLoader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <AppNavbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
