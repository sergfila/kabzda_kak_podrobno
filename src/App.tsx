import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            Hello, samurai! Let's go!
            <Nav/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    );
}

function Nav() {
    return (
        <div>
            <ul className="nav-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
    )
}

function Star() {
    return (
        <div>Star</div>
    )
}

export default App;
