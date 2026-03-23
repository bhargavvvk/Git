import React from "react";  
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/aboutus" component={About} />
                <Route path="/contactus" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;