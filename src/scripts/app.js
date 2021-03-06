import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginView'
import Dashboard from './views/dashboard'
import DishesView from './views/dishesView'
import ComposeView from './views/composeView'
import ACTIONS from './actions.js'
import {User} from './models/models'

const app = function() {
  const AppRouter = Backbone.Router.extend({
    routes: {
      "home": "handleHome",
      "dish/postDishes": "handlePostDish",
      "dish/myDishes": "handleMyDishes",
      "login": "handleLogin",
      "*catchall": "handleRedirect"
    },
    handleHome: function(){
      ReactDOM.render(<Dashboard />, document.querySelector('.container'))
    },
    handlePostDish: function(){
      ReactDOM.render(<ComposeView />, document.querySelector('.container'))
    },
    handleMyDishes: function(){
      ReactDOM.render(<DishesView />, document.querySelector('.container'))
    },
    handleLogin: function(){
      ReactDOM.render(<LoginView />, document.querySelector('.container'))
    },
    handleRedirect: function(){
      location.hash= "home"
    },
    initialize: function(){
      Backbone.history.start()
      this.on('route', function(hndlrName){
        if(!User.getCurrentUser()){
          location.hash= "login"
        }
      })
    }

  })
  new AppRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
