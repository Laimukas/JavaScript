console.log('Nuo cia viskas is JS antro failo')

//--------------- THIS ----------------

/*
function testing(){
let name = 'Jonas'
function grazintiVarda(){
    console.log(name)
}
grazintiVarda()
}
testing()
*/
/*
const oldSyntax = {
    skaicius: 12,
    pridekDvylika: function(item){
        return item + this.skaicius //kadangi is tevinio norim pasiimt reiksme,tai naudojam this keyword'a
    },
    kitas: function(item){
        console.log(item)
    }
}
oldSyntax.kitas(5)
*/
//oldSyntax['kitas'](5)

//this priklauso nuo to kaip buvo iskviesta funkcija
//oldSyntax.pridekDvylika(8) // this priklausys nuo to kas kviecia funkcija
//siuo atveju funkcija kviecia oldSyntax -> todel this referins i oldSyntax vidu

//kad aiskiau butu kokios reiksmes ismetamos
/*
const oldSyntax = {
    skaicius: {
        reiksme: 12
    },
    vardas: 'Jonas',
    pridekDvylika: function(item){
        console.log(item + this.skaicius)  //kadangi is tevinio norim pasiimt reiksme,tai naudojam this keyword'a
    },
}
console.log(oldSyntax.skaicius.reiksme)*/
/*
const oldSyntax = {
    skaicius: 12,
    vardas: 'Jonas',
    pridekDvylika: function(item){
        console.log(item + this.skaicius) 
    },
    kitas: function(){
        console.log('labas')
    }
}
oldSyntax.pridekDvylika(12) //situo atveju this ieskau
// oldSyntax viduje
let newAdd12 = oldSyntax.pridekDvylika;
//yra tas pats kas
//let newAdd12 = function(item){
  //  console.log(item + this.skaicius) 
//},
let newHello = oldSyntax.kitas
// this gali sudaryti tokiu niuansu jog jo reiksme gali kisti
*/

//--------------- Calbacks --------------------
//https://www.w3schools.com/jsref/jsref_obj_array.asp
/*const randomNumbers = [1, 22, 543, 2, 6, 12, 55, 86, 6, 9, 12, 31, 51, 92, 3]

function print(element){
    console.log(element)
}
randomNumbers.forEach(print)
*/
//dazniau bus aprasyta taip
//randomNumbers.forEach(function(el){
 //  console.log(el)
//})

//forEach metodas atsirado anksciau nei for ... of
//tad dar galima aprasyti ir taip 
//for (let num of randomNumbers){
 //   console.log(num)
//}

//kelios forEach funkcijos: https://www.w3schools.com/jsref/jsref_foreach.asp
/*
const knygosApieProgramavima = [
    {
      title: "The Pragmatic Programmer",
      author: 'David Thomas',
      goodReadsRating: 4.33,
      numberOfRatings: 18579
    },
    {
      title: "Clean Code",
      author: 'Robert C. Martin',
      goodReadsRating: 4.39,
      numberOfRatings: 18094
    },
    {
      title: "The Clean Coder",
      author: 'Robert C. Martin',
      goodReadsRating: 4.28,
      numberOfRatings: 7459
    },
    {
      title: "The Effective Engineer",
      author: 'Edmond Lau',
      goodReadsRating: 4.28,
      numberOfRatings: 1401
    },
    {
      title: "Eloquent JavaScript",
      author: 'Marijn Haverbeke',
      goodReadsRating: 4.15,
      numberOfRatings: 2680
    }
  ]
*/
  //norim pasiimt Clean Code knygos autoriu
  //apsirasom

//console.log(knygosApieProgramavima[1].author)

// <<< uzduotis >>>
// naudojant forEach isprintinti knygos pavadinima
//bei goodReads... vertinima is 5 galimu kaip pvz 4.15/5
/*
function papildytiVertinima(knyga){
    console.log(knyga.goodReadsRating = `"${knyga.title}" knygos vertinimas ${knyga.goodReadsRating} is 5`) 
}

knygosApieProgramavima.forEach(papildytiVertinima)
*/

  //------------- randomNumbers ----------------
/*
  const randomNumbers = [1, 22, 543, 2, 6, 12, 55, 86, 6, 9, 12, 31, 51, 92, 3]
  let newRandomNumbers = randomNumbers.map(function(item){
      return item * 2
  })
  console.log('musu skaiciai:', randomNumbers)
  console.log('nauji skaiciai:', newRandomNumbers)*/

  //<<< uzduotis >>>
  //panaudoti map ir gauti nauja masyva kuriame
  //bus tik knygu pavadinimai
/*
function grazintiPavadinima(knyga) {
    return knyga.title
  }
  // primas ratas 
  // grazintiPavadinima(
  //   {
  //     title: "The Pragmatic Programmer",
  //     author: 'David Thomas',
  //     goodReadsRating: 4.33,
  //     numberOfRatings: 18579
  //   }
  // )
  // funkcija grazina item.title --> "The Pragmatic Programmer"
  // ["The Pragmatic Programmer" ]

  // antras ratas ["The Pragmatic Programmer", "Clean Code"]

   const knygupavadinimai = knygosApieProgramavima.map(grazintiPavadinima)
   // pirmo callo metu grazintiPavadinima[knygosApieProgramavima[0]]
  console.log(knygupavadinimai)*/

  // ---------------------- filter ----------------
  //https://www.w3schools.com/jsref/jsref_obj_array.asp

  //<<< uzduotis >>>
  //sukurti masyva kuriame ismestu knygas kuriu vertinimas didesnis nei 4.3
/*
function filterBestBook(book){
    if (book.goodReadsRating >= 4.3){
        return book
    }
    // tas pats
    // if (book.goodReadsRating >= 4.3)  return book
}
const geriausiaiIvertintosKnygos = knygosApieProgramavima.filter(filterBestBook)
console.log(geriausiaiIvertintosKnygos)*/

//--------- Arrow Functions ----------------
// naujas budas kaip galime aprasyti funkcijas
/*
const skaiciai3 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8];

let newSkaic = skaiciai3.map(num => {
    return num ** 2
});

newSkaic = skaiciai3.map(function(num){
    return num ** 2
})

function squared(num){
    return num ** 2
}
console.log(newSkaic)
//tas pats kaip
newSkaic = skaiciai3.map(function(num){
    return num * 2;
})
*/
//tas pats paprastas knygu pavadinimu istraukimas is masyvo naudojant toki metoda
/*
const bookNamesArr = knygosApieProgramavima.map(book => book.title)
console.log(bookNamesArr)*/

//kurie is situ veiks ir kodel?
//kur reik return kur nereik
/*
function add(a,b){
   return a + b
}

const add2 = (a,b) => {
   return a + b
}

const add3 = (a, b) => (
    a + b
)// tie skliaustai nieko nenurodo,tas pats kaip be ju butu

const add4 = (a, b) => a + b // cia tuo labiau kaip ankstesniam pavyzdi
*/

//----------------------- DOM ------------------------------
// DOM -- yra narsykles API (application programming interface)
// Kitaip - tai ta vieta kur mes galim keisti HTML ir CSS
// Realus HTML niekada nesikeicia, mes modifikuojame DOM, kuris
// keicia galutini HTML vaizda vartotojui

//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// document - type in web browser window or console.dir(document)
// document yra objektas kaip ir dauguma JavaScript daliu

// edit something in real web page trough javascript
// document.getElementById('').innerText = 'labas'

//------------------------ Selecting elements ----------------
// Kaip pasirenkame elementa su JS pagalba, mums negryzta HTML,
// mums gryzta JS objektas, kuris reprezentuoja ta  HTML dali, kuria pasirinkome
//pvz
/*let myHeaderTag = document.getElementById('my-h1');
console.log(myHeaderTag)

getElementByTagName
console.log(document.getElementsByTagName('p4'));

document.getElementsByTagName('img')*/
//grazina html kolekcija (masyva su html elementais - ju JS reprezentacijomis)
//cia negalesime naudoti masyvu metodu, kadangi tai nera standartinis masyvas

// --------------  getElementByClassName
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
// pvz
//let klases = document.getElementsByClassName('row')
//console.log(klases)

//---------------- querySelector
// metodas naudojamas pasiekti pirma elementa pagal nurodyta specifikacija
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// ----------------- querySelectorAll
// paima visus ne tik pirma elementa kuris atitinka

// turinio modifikavimas kai jau turime pasirinktus elementus
// innerText - textContent and innerHtml
//https://www.microfocus.com/documentation/silk-test/200/en/silktestworkbench-help-en/SILKTEST-21EEFF3F-DIFFERENCEBETWEENTEXTCONTENTSINNERTEXTINNERHTML-REF.html
// innerHTML naudosime jei norime prideti daugiau elementu nei vien tekstas

//------------ Style 
// pasirenkame bet koki html elementa ir pridedame prierasa  .style
// cia nebus stiliu is css failo, bet rodys inline stilius
// taip musu prideti stiliai bus inline, todel geriau keisti elemento klase
// pvz nuimti primary ir uzdeti secondary klase, su stiliais kuriu mum reikia po
// elemento paspaudimo.
// Stiliai uzrasomi camelCase
// problema jog jis priimamas kaip pagrindinis stilius ir ji pakeisti gali buti sunku

//<<< uzduotis >>>
// i html faila isimetam
/*
<div id="container">
        <h2>Profilio nuotrauka</h2>
        <img src="https://images.unsplash.com/photo-1596328546171-77e37b5e8b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
</div>
*/
// div width = 200px
// h1 is centered
// img has 50% border radius
// div su getElementById
// img pagal querySelector
// h1 querySelector
/*
let myImg = document.querySelector('img');
let myH1 = document.querySelector('h1')
let container = document.getElementById('container')
let myH2 = document.querySelector('h2')
let myBody = document.querySelector('body')
//kadangi susikuriau css faila,tai div conteinerio stiliu uzkomentinu
//container.style.border = '2px solid gray' 
//container.style.width = '300px';
//container.style.height = '300px';
//container.style.display = 'flex';
//container.style.flexDirection = 'column';
//container.style.alignItems = 'center';
myImg.style.width = '70%';
myImg.style.borderRadius = '50%';
myH1.textContent = 'Naujas pavadinimas'
myH1.style.textAlign = 'center'
myH2.textContent = 'Paveiksliukas'
myBody.style.textAlign = '-webkit-center'
*/

// <<< uzduotys kartojimui >>>
/*
const animals = [
  {
    type: 'fox',
    wild: true
  }, 
  {
    type: 'cat',
    wild: false
  }, 
  {
    type: 'dog',
    wild: false
  }, 
  {
    type: 'rabbit',
    wild: true
  }, 
  {
    type: 'giraffe',
    wild: true
  }, 
  {
    type: 'monkey',
    wild: true
  }, 
]*/
// sukurti nauja masyva wildAnimals, kuriame nebus naminiu gyvunu
// isivaizduokite jog nezinote cat ir dog indeksu,
// todel elementus pirmiau surasti
//mano isbandytas budas - buvo klaida,nes visiem duodavo jog tampa laukiniai
//klydau if aprasydamas, reikejo === true naudot o ne = true
/*
function wildAnimals(animals){
  if (animals.wild === true){
      return animals
  }
}
const laukiniai = animals.filter(wildAnimals)
console.log(laukiniai)
*/
//destytojo aprasytas budas
// 1 budas
/*
function filterIfWild(animals){
  return animals.wild === true
}
const wildAnimals2 = animals.filter(filterIfWild)
console.log(wildAnimals2)
*/
// 2 budas
/*
const wildAnimals2 = animals.filter(function(animal){
  return animal.wild === true
})
console.log(wildAnimals2)
*/
// 3 budas
/*
const wildAnimals2 = animals.filter(animal => animal.wild === true)
console.log(wildAnimals2)
*/

//<<< uzduotis >>>
// sujungti du masyvus i viena
/*
let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];*/
// 1 varijantas
/*
const allNumbers = firstArr.concat(secondArr)
console.log(allNumbers)*/
// 2 varijantas
/*
const allNumbers = [...firstArr, ...secondArr]
console.log(allNumbers)*/

//<<< uzduotis >>>
//rasti reiksmes kurios kartojasi abiejuose masyvuose
//parasyti funkcija kuri isspausdins visas pasikartojancias reiksmes
/*
const firstArrayAnimals = ["dog", "cat", "parrot"];
const secondArrayAnimals = ["lizard", "rat", "cat"];

const machingAnimals = firstArrayAnimals.filter(element => secondArrayAnimals.includes(element));
//filter grazina viska kas issivercia i true reiksme
//includes ir grazina true arba false
console.log(machingAnimals)*/

//<<< uzduotis >>>
//turime masyva,reik perrasyt masyva kuriame butu pasalitas norimas elementas
//console.log(remove_array_element([2, 5, 9, 6], 3))
//[2, 5, 9, 6]

//sitas budas netinka
/*
function removeRepeatingElements(arr, number) {
let myArr = arr.map(function(item,index){
    if (item === number){
      arr.splice(index, 1)
    }
  })
  console.log(myArr)
}
removeRepeatingElements(firstArr, 2)
*/
/*
let firstArr = [1, 2, 3, 4, 5, 2, 4, 1, 3, 2, 1, 3];
//let secondArr = [6, 7, 8, 9, 10];
function removeRepeatingElements(arr, number) {
 let myNewArr = arr.filter(item => item !== number)
 console.log(`ankstesnis arr: ${firstArr}`)
 console.log(`modifikuotas arr: ${myNewArr}`)
}
removeRepeatingElements(firstArr, 1)*/




// ------------- Atributes -------------
//https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes

//----------- Traversing DOM Elements --------
// parentElement - https://www.w3schools.com/jsref/prop_node_parentelement.asp
// children - https://www.w3schools.com/jsref/prop_element_children.asp

// -------- Adding elements to the DOM -------
// document.createElement()
//https://www.w3schools.com/jsref/met_document_createelement.asp

// Elementai kuriuos galim naudot koreguojant musu document elementus
//----------- insertAdjasentElement
// -----------appendChild
// -----------append
// ---------- prepnd
// -----------after

// document.createElement('element') - sukuria element, element HTML tage
// createElement.innerText
// document.body.appendChild(createdElement)

//<<< uzduotis >>>
// parasyti funkcija, kuri is gauto masyvo sukurs li itemus ir 
// sudes i ul. Taip pat sukurti h3 elementa su tekstu 'Darbu sarasas'

// su css stiliais ateityje dirbsim per JS
/*
let myImg = document.querySelector('img');
let myH1 = document.querySelector('h1')
let container = document.getElementById('container')
let myH2 = document.querySelector('h2')
let myBody = document.querySelector('body')
//container.classList.add('center')
//kadangi susikuriau css faila,tai div conteinerio stiliu uzkomentinu
//container.style.border = '2px solid gray' 
//container.style.width = '300px';
//container.style.height = '300px';
//container.style.display = 'flex';
//container.style.flexDirection = 'column';
//container.style.alignItems = 'center';
myImg.style.width = '70%';
myImg.style.borderRadius = '50%';
myH1.textContent = 'Naujas pavadinimas'
myH1.style.textAlign = 'center'
myH2.textContent = 'Paveiksliukas'
myBody.style.textAlign = '-webkit-center'
//cia prasideda nauja uzduotis
const darbai = ['paimti darbus is masyvo', 'parasyti funkcija', 'funkcija turi sukurti DOM elementus', 'tie elementai turi buti sudeti i tevini ul konteineri']
const myNewH3 = document.createElement('h3')
myNewH3.innerText = 'Sveiki is JS'
document.body.appendChild(myNewH3)
*/
/*
const myUl = document.createElement('ul');

function addListItemsToUl(arr) {
  // step 1 pereiti per visus masyvo elementus  
  // step 2 susikurti kiekvienam elementui nauja li
  // step 3 i li innerText prisideti darba is masyvo
  // step 4 kiekviena pilno li su tekstu prideti i ul

  arr.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item;
    myUl.append(li)
  });
document.body.appendChild(myUl)
}
addListItemsToUl(darbai)
*/

//---------- Removing elements ------------------

//<<< uzduotis >>>

//sukurti darbuotoju sarasa, kur korteleje butu darbuotoju
//nuotrauka
//vardas ir pavarde
//miestas
//nuoroda i jo svetaine
//paspaudus svetaines nuoroda,atsidarytu naujas langas
/*
let duomenysIsDB = [
  {
    id: 1,
    name: "Leanne Graham",
    photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    photo: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  },
  {
    id: 5,
    name: "Tom Dietrich",
    username: "Tom",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    email: "TomDietr@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  },
];
*/
// uzduotis 
// sukurti darbuotoju sarara, kur korteleje butu darbuotojo
// nuotrauka 
// vardar ir pavarde
// miestas 
// nuoroda i jo svetaine
// paspaudus nuoroda svetaine turetu atsidaryti naujame lange

/*
const mainContainer = document.createElement('div');

function createSingleCard(arr) {
// step 1 pereiti per visus arr elementus
arr.forEach(element => {
  // step 1.1 susikurti div elementa i kuri sudesime 
// likusius elementus
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card')
   // step 2 kiekvienam elementui sukuriame img elementa
   let cardImg = document.createElement('img');
   cardImg.src = element.photo;
   cardImg.classList.add('photo')
     // src galime praleisti prisidesime veliau kai zinosime 
// kokiu klasiu reikes stilizuoti nuotraukai ir 
// korteles turiniui
// step 3 sukurti h3 elementa vardui ir pavardei
let cardH3 = document.createElement('h3');
// prideti teksta i sukurta elementa
cardH3.innerText = element.name;
  // step 4 miestas eian i P taga
  let cardP = document.createElement('p')
// p tagui reikia teksto
cardP.innerText = element.address.city;
  // step 5 sukurti a lementa
// prideti jam teksta 'Nuoroda i svetaine'
// prideti href su elemento website value
let cardA = document.createElement('a');
cardA.innerText = 'Nuoroda i svetaine'
cardA.href = element.website
// visus sukurtus elementus sudedame i step 1.1 
// metu sukurta div
cardDiv.appendChild(cardImg);
cardDiv.appendChild(cardH3);
cardDiv.appendChild(cardP);
cardDiv.appendChild(cardA);
mainContainer.appendChild(cardDiv);
mainContainer.classList.add('container')

},
document.body.appendChild(mainContainer)
 // viska sudedame i mainCintainer 
);
}

createSingleCard(duomenysIsDB)
*/
//varijantas numeris 2 kaip apsirasyti sia uzduoti
/*
function createSingleCard(arr) {
  arr.forEach(element => {

  let newCard = `
    <div class="card">
      <img class="photo" src="${element.photo}" alt="Profile pciture"> 
      <h3>${element.name}</h3>
      <p>${element.address.city}</p>
    </div>
  `
  document.body.insertAdjacentHTML('beforeend', newCard)
  },
  );
}
  createSingleCard(duomenysIsDB)
  */

// 6 sav 3 diena 1:53:33 sustojau