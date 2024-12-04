import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom'; // Import router components
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import Appbar from './component/Appbar'
import Footer from './component/Footer';
import Description from './pages/product/Description'

import './App.css';

function App() {
  return (
    <div className="App">
          <Appbar/>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;


/*

Solar Yellow (#FDB813) – Represents sunlight, energy, and warmth.
Eco Green (#4CAF50) – Symbolizes nature, sustainability, and growth.
Sky Blue (#007BFF) – Reflects clean energy, sky, and innovation.

 */