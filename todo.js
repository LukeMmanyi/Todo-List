
let todoList;

if (!localStorage.getItem("todoList")) {
  todoList = [];


} else {
 todoList = JSON.parse(localStorage.getItem("todoList"));


}



renderlist()



const button = document.querySelector('.js-button');
  const input = document.querySelector('.js-input');

  input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      const task = input.value
  todoList.push({
    task: task,
    date: ""
  });
  input.value = '';
   renderlist();
    saveToStorage()
    }
  })
  

button.addEventListener('click', () => {
  
  const task = input.value
  todoList.push({
    task: task,
    date: ""
  });
  input.value = '';
   renderlist();
    saveToStorage()
})

function renderlist() {
  if (todoList.length === 0) {
    document.querySelector('.task-list').style.display = "none";
  } else {
    document.querySelector('.task-list').style.display = "block";
  }
let taskHtml ="";
todoList.forEach((task, index) => {
   if (task === "") {
    return;
  }
taskHtml += `
<div class="list-row">
<p class="list">${task.task}</p> 
<input class="date js-date" type="date" value="${todoList[index].date}"></input>
<button class="js-remove" data-index="${index}">Remove</button>
</div>
`;





})

document.querySelector('.task-list')
.innerHTML = taskHtml;


const removeButtons = document.querySelectorAll('.js-remove');
removeButtons.forEach((button, index) => {
button.addEventListener('click', () => {
todoList.splice(index, 1 );
renderlist();
 saveToStorage()
})




});

const dateInput = document.querySelectorAll('.js-date');
dateInput.forEach((date, index) => {
date.addEventListener('change', () => {
todoList[index].date = date.value;
 saveToStorage()
})
})



}




function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}




