window.onload = function() {
  let grizedarbai = JSON.parse(localStorage.getItem('darbai'));
  console.log(grizedarbai)
};


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

let myTodosList = [];

myBtn.addEventListener('click', function(){
  let inputText = myInput.value;

  if (inputText.length > 0) {
  let myLi = document.createElement('li');
  const checkBoxInput = document.createElement('input');
  // will use in localStorage 
  myTodosList.push(
    {
      todo: inputText,
      done: false,
    }
  )
 
  
  checkBoxInput.setAttribute('type', 'checkbox');
  checkBoxInput.addEventListener('click', (event) => {
   
    let jobThatImEditing = event.target.nextElementSibling.textContent
    

    myTodosList.forEach(job => 
      job.todo === jobThatImEditing ? job.done = !job.done : job)
    // job yra kievienas darbas musu masyve 
    //  -  {todo: inputText, done: false} 
    // job.todo yra mano li kuriame paspaudziau checkbox tekstas
    // identiskas variantas uzrasytas su paprasta funkcija
    // myTodosList.forEach(function(job) {
    //   if(job.todo === jobThatImEditing) {
    //     job.done = !job.done
    //   } else {
    //     return job
    //   }
    // })
    //
    console.log(myTodosList)

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
  todoEditInput.setAttribute('type', 'text');
  // naudosime veliasniam selectoriui - .querySelector('input[type=text]'
  todoEditInput.setAttribute('value', inputText);

  function toggleEdit() {
    mySpan.classList.toggle('hidden');
    todoEditInput.classList.toggle('hidden')
    mySpan.innerText = todoEditInput.value
  }


  todoEditInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') toggleEdit()
    
  })

  editIcon.addEventListener('click', function(event) {
    // naudosiu tam, kad galeciau susirasti job kuri keiciu sename masyve
    let oldValue = event.target.parentNode.textContent;
    // sita reiksme perrasysiu senaja reiksme
    let newValue = event.target.parentNode.querySelector('input[type=text]').value;
    // einu per savo darbu masyva [ job, job, job] 
    // kiekvienas job yra nauajs {todo: inputText, done: false} elemntas mano masyve
    myTodosList.forEach(job => 
      job.todo === oldValue ? job.todo = newValue : job)
      // kad gauti value, man reikia nurodyti key kuris naudojamas job objekte
      
      // ternary operatoriaus paaiskinimas
      // salyga ? ka grazinsime jei ji teisinga : ka grazinsime jei neteisinga
      // ? gali buti isivaizduojamas kaip if
      // : galime isivaizduoti kaip else
    toggleEdit()
  })



const deleteIcon = document.createElement('i');
const deleteClassList = ['bi', 'bi-trash-fill'];
deleteIcon.classList.add(...deleteClassList);

deleteIcon.addEventListener('click', (event) => {
  // currentValue bus naudojama susrasti darba kuri trinsime
  let currentValue = event.target.parentNode.textContent;
  // jei radau dabra kurio todo reiksme sutampa su currentValue paimu savo myTodosList
  // masyva is is jo pasalinu viena darba tie atitinkamu index
  myTodosList.forEach((job, index) => 
  // viduje galioja tas pats job ir index, pasikeitus job keiciasi ir index
  (job.todo === currentValue ? myTodosList.splice(index, 1) : job) )
  // ['cat', 'dog', 'frog']
  // primas ratas -> job = cat, index = 0
  // antras ratas -> job = dog, index = 1
  // trecias ratas -> job = frog, index = 2

  // myTodosList.splice(index, 1) Paaiskinimas 
  // splice pirmas parametras nurodo, elemento, kuri trinsime vieta masyve - index
  // antras parametras nurodo kiek elementu triname, siuo atveju 1
  // nenurodzius kiek elementu triname, butu pasalinti visi

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
  // console.log(myTodosList)
})



removeAllBtn.addEventListener('click', function() {

  let newCOmpletedTodos = myTodosList.filter(job => job.done !== true)

  let allCompletedTasks = document.querySelectorAll('.atlikta');
  allCompletedTasks.forEach(item => item.remove());
  totalNumberOfTodos = document.querySelectorAll('li').length;
  completedTodos = 0
  myProgressLabel.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`
  myProgressBar.value = 0;
  myTodosList = [...newCOmpletedTodos]
  // ... dar vadinamas spread operatoriumi
})


window.addEventListener("beforeunload", function(){
  localStorage.setItem('darbai', JSON.stringify(myTodosList))
})

//------------------- HTML -------------------------
/*
<div class="container">
    <h1>My todo list</h1>
    <div class="add-block">
      <input class="my-input" type="text">
      <button>+</button>
    </div>
  
  <label class="progress-label" for="file">0 of 0</label>
  
  <progress id="file" max="100" value="0"></progress>
    <button id="all">Remove completed</button>
  </div>
  */

//------------------ Atnaujinto / Patobulinto Listo kurimo JS kodas ---------------------------

/*
let myTodosList = [];

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


function calculateNumberOfAllTodos(){
  totalNumberOfTodos = document.querySelectorAll('li').length;
}
function calculateNumberOfCompletedTodos(){
  completedTodos = document.querySelectorAll('.atlikta').length
}

function updateNumberValues() {
  myProgressLabel.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`
}

function updateProgressBar() {
  percentOfCompetedTasks = Math.floor(completedTodos === 0 ? 0 : (completedTodos / totalNumberOfTodos) * 100 );
  myProgressBar.value = percentOfCompetedTasks;
}
function checkboxListener(event) {
  let jobThatImEditing = event.target.nextElementSibling.textContent
    console.log(jobThatImEditing)
  myTodosList.forEach(job => 
    job.todo === jobThatImEditing ? job.done = !job.done : job)
  event.target.parentElement.classList.toggle('atlikta')
  
  calculateNumberOfCompletedTodos()
  updateNumberValues()
  updateProgressBar()
}

function deleteEventListener(event) {
  let currentValue = event.target.parentNode.textContent;
  myTodosList.forEach((job, index) => 
  (job.todo === currentValue ? myTodosList.splice(index, 1) : job) )

  event.target.parentElement.remove();
  calculateNumberOfCompletedTodos()
  calculateNumberOfAllTodos()
  updateNumberValues()
  updateProgressBar()
}



function editEventListener(event){
  let oldValue = event.target.parentNode.textContent;
  let hiddenInput = event.target.parentNode.querySelector('input[type=text]')
  let currentSpan = event.target.parentNode.querySelector('span')
    myTodosList.forEach(job => 
    job.todo === oldValue ? job.todo = hiddenInput.value : job)
    
    currentSpan.classList.toggle('hidden');
    hiddenInput.classList.toggle('hidden')
    currentSpan.innerText = hiddenInput.value
}

function inputEditOnEnter(event) {
  let hiddenInput = event.target.parentNode.querySelector('input[type=text]')
  let currentSpan = event.target.parentNode.querySelector('span')
  if (event.code === 'Enter') {
    currentSpan.classList.toggle('hidden');
    hiddenInput.classList.toggle('hidden')
    currentSpan.innerText = hiddenInput.value
    }
}

// {todo: 'Mano darbas', done: false}
function createJobsFromLsData(job) {
const myLi = document.createElement('li');
// neleidzia deti tuscios klases, kaip isspresti?
let className = job.done ? 'atlikta' : 'neatlikta';
myLi.classList.add(className)

const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.addEventListener('click', checkboxListener)
// job = {todo: 'Tekstas', done: false}
checkbox.checked = job.done

const span = document.createElement('span');
span.textContent = job.todo

const editField = document.createElement('input');
editField.classList.add('hidden');
editField.value = job.todo;
editField.setAttribute('type', 'text');
editField.addEventListener('keydown', inputEditOnEnter)

const editIcon = document.createElement('i');
const editClassList = ['bi', 'bi-pencil-fill']
editIcon.classList.add(...editClassList);
editIcon.addEventListener('click', editEventListener)

const deleteIcon = document.createElement('i');
const deleteClassList = ['bi', 'bi-trash-fill'];
deleteIcon.classList.add(...deleteClassList);
deleteIcon.addEventListener('click', deleteEventListener)

myLi.appendChild(checkbox);
myLi.appendChild(span);
myLi.appendChild(editField);
myLi.appendChild(deleteIcon);
myLi.appendChild(editIcon);


myToDoUl.appendChild(myLi);

calculateNumberOfAllTodos();
calculateNumberOfCompletedTodos();
updateNumberValues()
updateProgressBar()
}


window.onload = function() {
  let toDosFromLS = JSON.parse(localStorage.getItem('darbai'));
  // ['carbas1', 'darbas2'] // kiekvienas darbas yra objektas
  toDosFromLS.forEach(item => createJobsFromLsData(item))
  myTodosList = [...toDosFromLS]
};

function addNewTodo() {
  let job = {
    // galetumee prideti id, kuri sugeneruotumeme atsitiktine tvarka
    // naudodami savo funkcija ir elementu ieskoti pagal originalu id
    // taip isvengtumeme problemu su darbais kurie turi ta pati teksta
    todo: myInput.value,
    done: false
  }
  myTodosList.push(job)
  createJobsFromLsData(job)
  myInput.value = ''
}

myBtn.addEventListener('click', addNewTodo);
removeAllBtn.addEventListener('click', function() {

  let newCOmpletedTodos = myTodosList.filter(job => job.done !== true)

  let allCompletedTasks = document.querySelectorAll('.atlikta');
  allCompletedTasks.forEach(item => item.remove());
  totalNumberOfTodos = document.querySelectorAll('li').length;
  completedTodos = 0
  updateNumberValues()
  myProgressBar.value = 0;
  myTodosList = [...newCOmpletedTodos]
})


window.addEventListener("beforeunload", function(){
  localStorage.setItem('darbai', JSON.stringify(myTodosList))
})
*/