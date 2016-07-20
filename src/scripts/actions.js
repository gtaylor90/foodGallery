import {User} from './models/models'

const ACTIONS = {
  registerUser: function(userObj){
    User.register(userObj).then(()=>this.logUserIn(userObj.email,
      userObj.password))
  },
  logUserIn: function(email, password){
    User.login(email, password).then(
      (resp)=> {
        alert(`user ${email} logged in!`)
        console.log(resp)
      },
      (err)=>{
        alert('FAILURE')
        console.log(err)
      })
  }
}

export default ACTIONS
