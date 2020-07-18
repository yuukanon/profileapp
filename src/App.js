import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <title>Yuuka Motobayashi Portfolio</title>
      <body>
        <Header />
        <Navbar />
        <main>
          <Summary />
          <Skills />
          <Project />
          <Contact />
        </main>
      </body>
    </div>
  );
}

export default App;
