import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import SkillList from './components/SkillList';
import SkillData from './SkillData';
import Project from './components/Project';
import Contact from './components/Contact';
import ProgressCircleExample from './components/Progressive'


function App() {
  const [data, setData] = useState([])

  const fetchQuotes = () => {
    fetch(`https://quotes.rest/qod/inspire?language=en&detailed=false`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(fetchQuotes,[]);
  console.log(data)
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
        </main>
      </body>
    </div>

  )
}

export default App;
