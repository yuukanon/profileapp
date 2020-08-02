import React, { Component } from 'react';
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


 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       data: {},
       isloaded: false,
     }
     }

     componentDidMount() {
       this.fetchData()
     }

     fetchData = () => {
       fetch(`http://quotes.rest/qod.json?category=inspire`)
       .then(res => res.json())
       .then(data => {this.setState({
         data,
         isloaded: true,
       })
      })
     }

     render() {
       const {data, isloaded} = this.state;
       return(
        <div className="App">
            <title>Yuuka Motobayashi Portfolio</title>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Header} />
                <Route path='/summary' component={Summary} />
                <Route path='/skill' component={SkillList} />
                <Route path='/quotes' render={() => isloaded && <Quotes data={data} />} />
                <Route path='/project' component={Project} />
                <Route path='/contact' component={Contact} />
              </Switch>
        </div>
       )
     }
   }
 

export default App;
