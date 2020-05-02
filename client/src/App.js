import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Network from './components/Network';
import Messages from './components/Messages';


class App extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Network</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Messages</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <BrowserRouter>
                        <Route path="/" exact component={Login} />
                        <Route path="/network" exact component={Network} />
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default App;