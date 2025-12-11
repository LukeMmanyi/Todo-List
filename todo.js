let todoList = [];

const button = document.querySelector('.js-button');
  const input = document.querySelector('.js-input');

  document.querySelector('.task-list').style.display = "none";


button.addEventListener('click', () => {
  const task = input.value
  todoList.push(task);
  input.value = '';
   renderlist();
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
<p class="list">${task}</p> 
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
})


});



}










