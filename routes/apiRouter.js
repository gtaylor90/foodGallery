let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Dish = require('../db/schema.js').Dish


  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err)
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err)
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password",function(err, record){
        if(err || !record) return res.json(err)
        let recordWithUpdates = helpers.updateFields(record, req.body)
        recordWithUpdates.save(function(err){
          if(err) return res.json(err)
          res.json(recordWithUpdates)
        })
      })
    })
    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
    })

    // Routes for a Model(resource) should have this structure
   //  this route will create a brand new dish that we will put in the db
  apiRouter.post('/dishes', function(request, response){
     let dish = new Dish(request.body) //create new instance of schema
   //   request.body is all the information we gathered from the client side
     dish.save(function(err){ //handling errors
        if(err){
          response.send(err)
        } else {
          response.json(dish)
        }
     })
 })

 // this route will show us all the dieshes posted by all users
  apiRouter.get('/dishes', function(request, response){
    Dish.find(request.query, function(err, rec){
      if(err){
        response.send(err)
      } else {
        response.json(rec)
      }
    })
    //some methods live directly on the model
  })
  apiRouter.get('/user/dishes', function(request, response){
    // wanna get all dishes where the author id matches id of current user
    //if there is a user session then there is a user obj
    Dish.find({authorID: request.user._id}, function(request, response){
      
    })
  })

module.exports = apiRouter
