var TodoModel = Backbone.Model.extend({
	defaults: function() {
		return({
			name: "Gotta get it done...",
			dateCreated: new Date()
		})
	},
	initialize: function() {
		
	},
});

var TodoView = Backbone.View.extend({
	tagname: 'div',
	id: 'todo_item',
	className: 'todo_items',
	
	initialize: function() {
		this.render();
	},
	
	template: _.template('<h3><%= name %></h3>'),
	
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	}
});

var AddNewItem = Backbone.View.extend({
	el: $("#todoApp"),

	template: _.template($("#newListTemplate").html()),

	events: {
		"click #newList": "addNewItem"
	},

	addNewItem: function() {
		$("#addListDiv").html(this.template);
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		//this.$el.append(this.template);
	}	
});
var newItem = new AddNewItem;

//var todomodel = new TodoModel;
//var todo = new TodoView({model:todomodel });