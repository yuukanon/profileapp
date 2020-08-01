import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import SkillList from './components/SkillList';
import SkillData from './SkillData';
import Project from './components/Project';
import Contact from './components/Contact';
import Quotes from './components/Quotes';


function App() {
  const [data, setData] = useState({})

  const fetchQuotes = () => {
    fetch(`http://quotes.rest/qod.json?category=inspire`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(fetchQuotes,[]);
  // console.log(data)
  return(
    <div className="App">
      <title>Yuuka Motobayashi Portfolio</title>
      <body>
        <Header />
        <Navbar />
        <main>
          <Summary />
          <SkillList {...SkillData} />
          <Project />
          <Contact />
          <Quotes data={data} />
        </main>
      </body>
    </div>

  )
}

export default App;
