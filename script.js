var listElement= document.querySelector('#app ul');
var inputElement=document.querySelector('#app input');
var buttonElement=document.querySelector('#app button');


var todos=JSON.parse(localStorage.getItem('list_todos')) || [];


renderTodo();
function renderTodo(){
listElement.innerHTML='';
for(todo of todos){
var pos=todos.indexOf(todo);
var todoElement=document.createElement('li');

var textElement=document.createTextNode(todo);
todoElement.setAttribute('class','list-group-item');
todoElement.appendChild(textElement);
var linkElement= document.createElement('a');
linkElement.setAttribute('class','badge badge-pill badge-danger');
var linkText=document.createTextNode(' Excluir');
linkElement.setAttribute('href','#');
linkElement.setAttribute('onclick','deleteToDo('+pos+')');
linkElement.appendChild(linkText);
todoElement.appendChild(linkElement);
console.log(todoElement);
listElement.appendChild(todoElement);
}
}


function addToDo(){
  
todos.push(inputElement.value);
renderTodo();
saveToStorage();
}

function deleteToDo(z){
todos.splice(z,1);
renderTodo();
saveToStorage();
}
buttonElement.onclick=addToDo;


function saveToStorage(){
localStorage.setItem('list_todos',JSON.stringify(todos));


}