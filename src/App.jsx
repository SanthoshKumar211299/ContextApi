import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App()  {
  return (
    <><div className="fixed-top">
    <Navbar/>
    <Header />
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center cardcss">
    <Card  />
    </div>
    <Footer/>
  </>
  );
};

export default App;