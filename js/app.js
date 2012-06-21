/**************************************************************************/
/*************************Backbone Models**********************************/
/**************************************************************************/

/////////////////////////List Item Model///////////////////////////////////
var ListItem = Backbone.Model.extend({
	defaults : {	
		"title": "",
		"status": "Active",
		"duedate": new Date()
	},
	initialize: function() {

	}
});

//////////////////////////List Model///////////////////////////////////////
var List = Backbone.Model.extend({
	defaults : {	
		"title": ""
	},
	initialize: function() {

	}
});

/**************************************************************************/
/*************************Backbone Collections*****************************/
/**************************************************************************/

//////////////////////////List Collection///////////////////////////////////
var TodoList = Backbone.Collection.extend({
	model: ListItem,
	initialize: function(models, options) {
		options || (options = {});
		if(options.title) {
				this.title = options.title;
		}
	}
});


/**************************************************************************/
/*************************Backbone Views***********************************/
/**************************************************************************/

//////////////////////////List View///////////////////////////////////////
var NewListView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		var variables = {label : "Enter a name for the list"};
		var template = _.template($("#newListTemplate").html(), variables);
		$(this.el).html(template);
	}
});

//////////////////////Show All List View///////////////////////////////////////
var ShowAllListView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		var variables = {title : "Enter a name for the list"};
		var template = _.template($("#allListsTemplate").html(), variables);
		$(this.el).html(template);
	}
});

//////////////////////////List Item View///////////////////////////////////
var NewListItemView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		var template = _.template($("#newListTemplate").html(), variables);
		$(this.el).html(template);
	}
});
