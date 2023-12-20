import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Future from './components/Future';
import Hero from './components/HeroSection';
import Footer from './components/Footer';
import Section from './components/Section2';
function App() {
  return (
    
   <div className="App">

       <Navbar/>
       <Hero/>
       <Section/>
      <Future/>
      <Footer/>
    </div>
  );
}

export default App;
