import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render () {
        return (
            <div className="home">
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/pandas">Pandas</NavLink></li>
                        <li><NavLink to="/puppies">Puppies</NavLink></li>
                        <li><NavLink to="/sunrises">Sunrises</NavLink></li>
                        <li><NavLink to="/search">Search</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;
