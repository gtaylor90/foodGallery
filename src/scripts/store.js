import Backbone from 'backbone'
import _ from 'underscore'
import {DishCollection} from './models/models'

const DISH_STORE = _.extend(Backbone.Events, {

  data: {
    collection: new DishCollection()
  },

  _getData: function(){
    return _.clone(this.data)
  },

  emitChange: function(){
    this.trigger('updateContent')

  },

  _initialize: function(){
    this.data.collection.on('sync update', this._emitChange.bind(this))
  }
})

DISH_STORE._initialize()

export default DISH_STORE
