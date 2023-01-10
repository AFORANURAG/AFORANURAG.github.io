import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChakraProvider } from '@chakra-ui/react'
 import { Route,Routes } from 'react-router-dom';
import Githubstats from './components/Githubstats';



function App() {
  return (
    <ChakraProvider>

    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Githubstats/>
    <Contact />
    <Footer />
  </div>


</ChakraProvider>
  
  );
}

export default App;
