import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import History from './components/History';
import WorldTracker from './components/WorldTracker';
import India from './components/India';
import Country from './components/Country';
import Symptoms from './components/Symptoms'
import {Route} from 'react-router-dom';
import IndianState from './components/IndianState';
function App() {
  return (
    <div className="App">
      <Route path ='/'  component={Header}/>
      <Route path ='/' exact component={Home}/>
      <Route path ='/symptoms' exact component={Symptoms}/>
      <Route path ='/history' exact component={History}/>
      <Route path ='/india' exact component={India}/>
      <Route path ='/india/states' exact component={IndianState}/>
      <Route path ='/worldtracker' exact component={WorldTracker}/>
      <Route path ='/worldtracker/:country' exact component={Country}/>
    </div>
  );
}

export default App;
