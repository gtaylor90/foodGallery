//COPIED FROM MONGO MESSAGES

import React from 'react'
import ACTIONS from '../actions'

const Header = React.createClass({
    render: function() {
        return (
            <div id="headerContainer">
                <h1>FoodMood</h1>
                <NavBar />
            </div>
            )
    }
})

const NavBar = React.createClass({
    render: function() {
        return (
            <div id="navBar"> {/*made a few edits here so that is makes sense for this app*/}
                <a className="button" href="#login">Log In</a>
                <a className="button" href="#home">Home</a>
                <a className="button" href="#dish/myDishes">My Dishes</a>
                <a className="button" href="#dish/postDishes">Post Dish</a>
                <a className="button" href="#" onClick={ACTIONS.logUserOut}>Log Out</a>
            </div>
            )
    }
})

export default Header
