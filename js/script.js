var idCounter = 0;

function addItem() {
    // Create and append new todo-item to the row div
    var selectBox = document.getElementById('todo-priority');
    var selectedPriority = selectBox.options[selectBox.selectedIndex].value;

    var divTodoItem = document.createElement('div');
    if(selectedPriority == 'High'){
        var todoPriority = 'high';
    }
    else if(selectedPriority == 'Medium'){
        var todoPriority = 'medium';
    }
    else if(selectedPriority == 'Low'){
        var todoPriority = 'low';
    }
    else{
        alert('You have not selected a priority.');
        return;
    }
    divTodoItem.className = 'todo-item todo-item-' + todoPriority;
    divTodoItem.id = ('todo-item' + idCounter);
    document.getElementById('todo-item-list').appendChild(divTodoItem);

    // Set var text to input text
    var text = document.getElementById('todo-new-input').value;
    
    // Create and append the todo-text div to the new todo-item
    var divTodoText = document.createElement('div');
    divTodoText.className = 'todo-text';
    divTodoText.innerHTML = text;
    divTodoItem.appendChild(divTodoText);

    var divTodoCloseDiv = document.createElement('div');
    divTodoCloseDiv.className = 'todo-remove-icon';
    divTodoText.appendChild(divTodoCloseDiv);

    var divTodoCloseButton = document.createElement('i');
    divTodoCloseButton.className = 'far fa-times-circle';
    divTodoCloseButton.id = idCounter;
    divTodoCloseButton.setAttribute('onClick', 'removeItem(this.id)');
    divTodoCloseDiv.appendChild(divTodoCloseButton);
    idCounter++;
    document.getElementById('todo-new-input').value = '';
}

function removeItem(itemId) {
    var parentID = document.getElementById('todo-item' + itemId);
    console.log(parentID);
    parentID.remove();
};