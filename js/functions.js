function AddList() {
	var list_item_view = new NewListView({ el: $("#addListDiv")});
}

function CreateNewList() {
	var name = $("#ListName").val();
	var list = new TodoList({title: name});	
	var all_list_view = new ShowAllListView({ el: $("#viewListDiv")})
}