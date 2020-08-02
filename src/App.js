import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import SkillList from './components/SkillList';
import SkillData from './SkillData';
import Project from './components/Project';
import Contact from './components/Contact';
import Quotes from './components/Quotes';
import Header2 from './components/Header2'


 function App() {
   

       return(
        <div className="App">
            <title>Yuuka Motobayashi Portfolio</title>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Header} />
                <Route path='/summary' component={Summary} />
                <Route path='/skill' component={SkillList} />
                <Route path='/project' component={Project} />
                <Route path='/contact' component={Contact} />
              </Switch>
        </div>
       )
     }
   
 

export default App;
