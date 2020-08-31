import React from "react";
import TableAuthor from "./components/tableAuthor";
import TableBook from "./components/tableBook";
import Home from "./components/home";
import {Route, BrowserRouter as Router} from "react-router-dom";
import "./App.css";
class App extends React.Component{
    render() {
        return(
                <Router>
                    <div>
                        <div className="nav">
                            <b id="title">Library</b>
                            <p className="nav-item">
                                <a href={"http://localhost:3000"} >Home</a>
                            </p>
                        </div>
                        <Route path="/" exact component={Home}/>
                        <Route path="/author" component={TableAuthor}/>
                        <Route path="/book" component={TableBook}/>
                    </div>
                </Router>
        );
    }
}

export default App;