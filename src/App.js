import React from "react";
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
//import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

//import navbar 
import Navbar from './components/Navbar' 

import CocktailList from './components/CocktailList'
import SearchForm from './components/SearchForm'

export default function App() {
  return <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/SingleCocktail/:id">
      <SingleCocktail />
    </Route>
    <Route path="*">
      <Error/>
    </Route>
    </Switch>
  </Router>
}
