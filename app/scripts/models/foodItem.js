/* global Backbone */
var app = app || {};

app.FoodItem = Backbone.Model.extend({
  defaults: {
    name: '',
    calories: null
  }

});
