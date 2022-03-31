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