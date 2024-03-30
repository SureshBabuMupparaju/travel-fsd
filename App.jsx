// App.js
import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import DestinationsSection from './Components/DestinationsSection';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
