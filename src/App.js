import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Footer';


function App() {
  let component 
  switch (window.location.pathname) {
    case "/": 
    component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/contact":
      component = <Contact />
      break    
  }
  return (
    <>
    <Navbar></Navbar>
    {component}
    <Footer></Footer>
    </>
  );
}

export default App;
