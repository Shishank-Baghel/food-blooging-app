import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import LatestArticles from './components/LatestArticles';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
     <ChakraProvider>
        <Home/>
        <About/>
        <LatestArticles/>
        <Footer/>
    </ChakraProvider>
    </>
  );
}

export default App;
