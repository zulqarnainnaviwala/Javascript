function addItem() {
    const todoItem = document.getElementById('todoItem');
    const todo = todoItem.value;
    if (todo.length == 0) {
        alert("Please enter your todo item");
    } else {
        todoTemplate(todo);
    }
}

function todoTemplate(todo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = todo
    li.insertAdjacentElement('afterbegin', span);

    const list = document.getElementById('list');
    list.insertAdjacentElement('beforeend', li);

    //Adding button into div
    const div = document.createElement('div');
    const doneButton = document.createElement('button');

    /*Styling Done Button*/
    doneButton.style.marginRight = '30px'
    doneButton.style.backgroundColor = "rgba(215, 255, 234)"
    doneButton.style.borderRadius = "40px"
    doneButton.style.color = "#4CAF50"
    doneButton.style.padding = "5px 10px"
    doneButton.style.textAlign = "center"
    doneButton.style.margin = "5px"
    doneButton.style.fontWeight = "bold"


    doneButton.innerText = "Done";
    doneButton.addEventListener('click', doneFunc)
    // alert(todo)

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";

    /*Styling Done Button*/
    deleteButton.style.marginRight = '30px'
    deleteButton.style.backgroundColor = " rgba(215, 255, 234)"
    deleteButton.style.borderRadius = "40px"
    deleteButton.style.color = "#4CAF50"
    deleteButton.style.padding = "5px 10px"
    deleteButton.style.textAlign = "center"
    deleteButton.style.margin = "5px"
    deleteButton.style.fontWeight = "bold"


    deleteButton.addEventListener('click', deleteFunc)


    div.insertAdjacentElement('afterbegin', doneButton);

    div.insertAdjacentElement('beforeend', deleteButton);

    //adding div into the list
    li.insertAdjacentElement('beforeend', div);

}

const deleteFunc = function () {
    console.log('test delete function');
    const li = this.parentElement.parentElement;
    li.remove();

}

const doneFunc = function () {

    const li = this.parentElement.parentElement;
    li.classList.add("complete");
    li.getElementsByTagName('span')[0].style= "text-decoration:line-through";
    // let str = document.getElementsByName('div').value;
    // let cross = str.strike();
    // document.getElementsByName('div') = cross;
}