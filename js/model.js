var ListItem = Backbone.Model.extend({
	defaults : {	
		"title": "",
		"status": "Active",
		"duedate": new Date()
	},
	initialize: function() {
		//this.render();
	}
});

var TodoList = Backbone.Collection.extend({
	model: ListItem
});

var todo_list = new TodoList();
