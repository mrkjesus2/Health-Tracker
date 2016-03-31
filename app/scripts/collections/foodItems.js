/* global Backbone */
var app = app || {};

var FoodItemList = Backbone.Collection.extend({
  model: app.FoodItem

});

app.FoodItems = new FoodItemList();
// app.FoodItems(new FoodItem({name: 'Carrots', calories: 30}));
