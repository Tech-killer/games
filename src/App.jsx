import React, { useContext } from 'react'; 
import { Route, Routes,} from 'react-router-dom';
import Home from './Home/Home';
import Explores from './Explores/Explores';
import Service from './Service/Service.jsx';
import Contact from './components/Contact'; 
import { Toaster } from 'react-hot-toast'; 
import { AuthContext } from './context/AuthProvider'; 

function App() {
  const { authUser } = useContext(AuthContext); 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={ <Explores />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App; 