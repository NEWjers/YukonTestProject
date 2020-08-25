import React from "react";
import TableAuthor from "./components/tableAuthor";
import TableBook from "./components/tableBook";
import Home from "./components/home";
import {Route, BrowserRouter as Router} from "react-router-dom";

class App extends React.Component{
    render() {
        return(
                <Router>
                    <div>
                        <h1 align={"center"}>
                            Library
                        </h1>
                        <Route path="/" exact component={Home}/>
                        <Route path="/author" component={TableAuthor}/>
                        <Route path="/book" component={TableBook}/>
                    </div>
                </Router>
        );
    }
}

export default App;