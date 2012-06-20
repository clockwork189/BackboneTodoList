var ListItemView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		var variables = {title : "New Entry"};
		var template = _.template($("#listItemTemplate").html(), variables);
		$(this.el).html(template);
	}
});
var list_item = new ListItem();