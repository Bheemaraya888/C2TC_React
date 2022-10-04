import './index.css'

import {BrowserRouter as Router ,Switch,Route, BrowserRouter, } from "react-router-dom";
import NotFound from "./components/NotFound";
import ShopsList from "./components/ShopsList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddShop from "./components/AddShop";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Layout.js/Navbar";
function App(){
return (
  <BrowserRouter>
  <Router>
  <div className="App">
   
    <Navbar/>
  
    <Switch>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/el" component={ShopsList} />
    <Route exact path="/add" component={AddShop} /> 
    <Route exact path="/shops/edit/:id" component={AddShop} />
    <Route exact path="*" component={NotFound}/>
  
    
      </Switch>

      
      </div>
      </Router>
      </BrowserRouter>
  
 
);
  
}
export default App;
