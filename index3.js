// Global selectors  and variables // 
const myContainer = document.querySelector('.container');
let myInput = document.querySelector('input');
let myBtn = document.querySelector('button');
const myProgressLabel = document.querySelector('.progress-label');
const removeAllBtn = document.querySelector('#all');

const myProgressBar = document.querySelector('progress')
const myToDoUl = document.createElement('ul');
myContainer.appendChild(myToDoUl);

let totalNumberOfTodos = 0;
let completedTodos = 0;
let percentOfCompetedTasks = 0;

myBtn.addEventListener('click', function(){
  

  let inputText = myInput.value;

  if (inputText.length > 0) {
  let myLi = document.createElement('li');
  const checkBoxInput = document.createElement('input');
  
  checkBoxInput.setAttribute('type', 'checkbox');
  checkBoxInput.addEventListener('click', (event) => {
    event.target.parentElement.classList.toggle('atlikta')
    completedTodos = document.querySelectorAll('.atlikta').length
    myProgressLabel.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`


    percentOfCompetedTasks = Math.floor(completedTodos === 0 ? 0 : (completedTodos / totalNumberOfTodos) * 100 );
    myProgressBar.value = percentOfCompetedTasks;
  });

  const editIcon = document.createElement('i');
const editClassList = ['bi', 'bi-pencil-fill']
editIcon.classList.add(...editClassList);

  const mySpan = document.createElement('span')
  mySpan.innerText = inputText;
  const todoEditInput = document.createElement('input');
  todoEditInput.setAttribute('class', 'hidden');
  todoEditInput.setAttribute('value', inputText);

  function toggleEdit() {
    mySpan.classList.toggle('hidden');
    todoEditInput.classList.toggle('hidden')
    mySpan.innerText = todoEditInput.value
  }


  todoEditInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') toggleEdit()
    
  })

  editIcon.addEventListener('click', function() {
    toggleEdit()
  })



const deleteIcon = document.createElement('i');
const deleteClassList = ['bi', 'bi-trash-fill'];
deleteIcon.classList.add(...deleteClassList);

deleteIcon.addEventListener('click', (event) => {
  event.target.parentElement.remove();
  completedTodos = document.querySelectorAll('.atlikta').length
  totalNumberOfTodos = document.querySelectorAll('li').length;
  myProgressLabel.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`

  percentOfCompetedTasks = Math.floor(completedTodos === 0 ? 0 : (completedTodos / totalNumberOfTodos) * 100 );
  myProgressBar.value = percentOfCompetedTasks;
});

myLi.appendChild(checkBoxInput)
myLi.appendChild(mySpan)
myLi.appendChild(todoEditInput)

myLi.appendChild(deleteIcon)
myLi.appendChild(editIcon)


  myToDoUl.appendChild(myLi)
  totalNumberOfTodos = document.querySelectorAll('li').length;

  percentOfCompetedTasks = 
  Math.floor(completedTodos === 0 ? 0 : (completedTodos / totalNumberOfTodos) * 100 );

  myProgressBar.value = percentOfCompetedTasks;
  myProgressLabel.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`


  myInput.value = ''
  } else {
    alert('Iveskite uzduoti')
  }
})

removeAllBtn.addEventListener('click', function() {
  let allCompletedTasks = document.querySelectorAll('.atlikta');
  allCompletedTasks.forEach(item => item.remove());
  totalNumberOfTodos = document.querySelectorAll('li').length;
  completedTodos = 0
  myProgressLabel.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`
  myProgressBar.value = 0;
})