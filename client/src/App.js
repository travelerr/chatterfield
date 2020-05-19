import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Network from './components/Network';
import Messages from './components/Messages';

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div class="container">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/network">Network</Link>
                        </li>
                        <div></div>
                        <li className="nav-item">
                            <Link to="/messages">Messages</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                <div>
                    <Route path="/" exact component={Login} />
                    <Route path="/network" exact component={Network} />
                    <Route path="/messages" exact component={Messages} />
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;