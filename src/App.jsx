import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Homepage } from "./components/Homepage";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Githubstats from "./components/Githubstats";
import Aboutme from "./components/Aboutme";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      isLoading(false);
    }, 2000);
  }, []);

  return (
    <ChakraProvider>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="App">
            <NavBar />
            <Homepage />
            <Aboutme />

            <Skills />
            <Projects />
            <Githubstats />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
