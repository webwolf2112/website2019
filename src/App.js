import React, { Fragment } from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import './App.scss';

const App = () => {
  return(
      <Fragment>
      <div className="sticky-hero"></div>
      <div className="app">
        <Header />
        <About />
        <Skills />
        <Education />
        <Work />
        <Footer />
      </div>
      </Fragment>
    )
}

export default App;

