
function newItem(){
//Adding new list item:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

//Warning user about blank input field:
    if (inputValue === '') {
        alert("This field cannot be left blank!");
    } else {
        $('#list').append(li);
    }

//Allowing user to cross out item from list:
    function crossOut() {
		  li.toggleClass("strike");
	  }
    
    li.on("dblclick", function crossOut() {
		  li.toggleClass("strike");
	  })

//Adding "X" button for deletion of items:
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

//Making "X" button functional:
    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
      li.addClass("delete");
    }

//Enabling "drag-to-reorder" functionality:
    $('#list').sortable();

  }