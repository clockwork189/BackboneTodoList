var TodoRouter = new (Backbone.Router.extend({
	routes: {
		"": "index",
		"item/:id": "ShowTodoItem",
		"item/edit/:id": "EditTodoItem",
		"item/remove/:id": "RemoveTodoItem",
		
		"list/edit/:id": "EditTodoList",
		"list/remove/:id": "RemoveTodoList",
		"list/:id": "ShowTodoList"
	},
	initalize: function(){

	},
	ShowTodoItem: function(id) {
		alert("show item " + id);		
	},
	ShowTodoList: function(id) {
		alert("show list " + id);		
	},
	EditTodoItem: function(id) {
		alert("edit item " + id);		
	},
	EditTodoList: function(id) {
		alert("edit list " + id);		
	},
	AddTodoItem: function() {
		//e.preventDefault();
	},
	AddTodoList: function(e) {
		var newList = new TodoNewListView;
		alert("add new list");
	},
	RemoveTodoItem: function(id) {
		alert("remove item " + id);				
	},
	RemoveTodoList: function(id) {
		alert("remove list " + id);				
	},
	Start: function(){
		Backbone.history.start({ pushState: true, root: "/playground/todo/"});
	}, 
	index: function(){
		//var todoListView = new TodoListView({ collection: TodoItemCollection });
	}
}));

var TodoListModel = Backbone.Model.extend({
	defaults: function() {
		return {
			title: "List Name",
			description: "List Description",
			dateCreated: new Date(),
			isComplete: false
		}
	}
});

var TodoItemModel = Backbone.Model.extend({
	defaults: function() {
		return {
			title: "Item Name",
			description: "Item Description",
			dateCreated: new Date(),
			isDone: false
		}
	}
});

var TodoListCollection = Backbone.Collection.extend({
	model: TodoListModel
})

var TodoItemCollection = Backbone.Collection.extend({
	model: TodoItemModel
})

var TodoListView = Backbone.View.extend({
	template: _.template($("#allListsTemplate").html()),
	el: $("#viewListDiv"),
	events: {
		
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
	}
});

var AppView = Backbone.View.extend({
	el: "#todoApp",
	events: {
	"click #newList": "ShowCreateListForm",	
	"click #submitlist": "CreateNewList",	
	},
	template: _.template($("#newListTemplate").html()),

	initialize: function(){

	},
	ShowCreateListForm: function() {
		$("#newList").hide();
		$("#addListDiv").show();
		$("#addListDiv").html(this.template);
	},
	CreateNewList: function() {
		var listmodel = new TodoListModel({title: $("#newListTitle").val(), description: $("#newListDescription").val(), });
		var listView = new TodoListView({ model: listmodel });
		$("#addListDiv").hide();
		$("#newList").show();
	}
});

$(function() {
	TodoRouter.Start();
	var view = new AppView;		
});




