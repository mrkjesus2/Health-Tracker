/* global $ _ Backbone */
var app = app || {};

app.FoodItemView = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#item-template').html()),

  events: {

  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log('Rendering', this.$el);
    return this;
  }
});
