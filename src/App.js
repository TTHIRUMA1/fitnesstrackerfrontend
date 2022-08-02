import React from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import ListDietComponent from './components/ListDietComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateDietComponent from './components/CreateDietComponent';
import UpdateDietComponent from './components/UpdateDietComponent';
import ViewDietComponent from './components/ViewDietComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                           <Route path = "/" exact component={ListDietComponent}></Route> 
                          <Route path = "/getDiets" component={ListDietComponent}></Route>
                         <Route path = "/adddiet/:id" component={CreateDietComponent}></Route>
                          <Route path = "/viewdiet/:id" component={ViewDietComponent} ></Route>
                            {/* <Route path = "/updateDiet/:id" component={UpdateDietComponent}></Route> */}  
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
