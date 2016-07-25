
import {User} from './models/models.js'
import {DishModel} from './models/models.js'


const ACTIONS = {
  fetchDishes: function(){
      console.log('hello world')
  },

  registerUser: function(userObj){
    User.register(userObj).then(()=>this.logUserIn(userObj.email,
      userObj.password),
      (err)=>{
        alert('FAILURE to register')
        console.log(err)
      }
    )
  },
  logUserIn: function(email, password){
    User.login(email, password).then(
      (resp)=> {
        alert(`user ${email} logged in!`)
        console.log(resp)
        location.hash= "home"
      },
      (err)=>{
        alert('FAILURE logging in')
        console.log(err)
      })
  },
  logUserOut: function(){
    User.logout().then(
      ()=> location.hash="login"
    )
  },
  saveDish: function(dishObj){
    var dish = new DishModel(dishObj)
    dish.save().then(
      (resp)=>{
        alert('Ya posted a dish!')
        console.log(resp)
        location.hash = "home"
      },
      (err)=>{
        alert('ya done goofed')
        console.log(err);
      }
    )
  }
}

export default ACTIONS
