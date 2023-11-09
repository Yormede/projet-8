import './App.css';
import React, {useState, useEffect} from 'react';
import Realisation from "./components/realisation/Realisation"
import Parcours from './components/parcours/Parcours';
import Competences from './components/competences/Competences'
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";


function App() {
  const [size, setMobileSize] = useState(window.innerWidth <= 568 ? true : false);

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth <= 568) {
              setMobileSize(true)
          } else {
              setMobileSize(false)
          }
      };          
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])

  return (
    <>
    <Header  />
    <main>
      <Parcours data={size} />
      <Competences />
      <Realisation />
    </main>
    <Footer />
    </>
  );
}

export default App;
