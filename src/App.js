import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Summary from './components/Summary'


function App() {
  return (
    <div className="App">
      <title>Yuuka Motobayashi Portfolio</title>
      <body>
        <Header />
        <Navbar />
        <Summary />
      </body>
    </div>
  );
}

export default App;
