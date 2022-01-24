
import './App.css';
import { BrandMain } from './Components/BrandMain';
import { Navbar } from './Components/Navbar';
import {  Route,Routes,BrowserRouter } from 'react-router-dom';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import Product from './Pages/Product';
import { Home } from './Pages/Home';
import { Footer } from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <div className='nav'>
   <BrandMain />
      <Navbar />
   </div>
   
    
     
      
   <div className='section'>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
      </div>
      <div className='footer'>
       <Footer />
       </div>
    </div>
    </BrowserRouter>
     
  );
}

export default App;
