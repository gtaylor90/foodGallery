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
  apiRouter.post('/dishes', function(req, res){
     let dish = new Dish(req.body) //create new instance of schema
   //   req.body is all the information we gathered from the client side
     dish.save(function(err){ //handling errors
        if(err){
          res.send(err)
        } else {
          res.json(dish)
        }
     })
 })

 // this route will show us all the dieshes posted by all users
  apiRouter.get('/dishes', function(req, res){
    Dish.find(request.query, function(err, rec){
      if(err){
        res.send(err)
      } else {
        res.json(rec)
      }
    })
    //some methods live directly on the model
  })


module.exports = apiRouter
