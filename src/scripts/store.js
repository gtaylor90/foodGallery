import Backbone from 'backbone'
import _ from 'underscore'
import {DishCollection} from './models/models'

const DISH_STORE = _.extend(Backbone.Events, {

  data: {
    collection: new DishCollection()
  },

  emitChange: function(){
    this.trigger('updateContent')

  },

  initialize: function(){
    this.data.collection.on('sync update', this._emitChange.bind(this))
  }
})

export default DISH_STORE
