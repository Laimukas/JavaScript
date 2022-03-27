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
<h1>Profilio nuotrauka</h1>
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
container.style.border = '2px solid gray'
container.style.width = '300px';
container.style.height = '300px';
myImg.style.width = '70%';
myImg.style.borderRadius = '50%';
myImg.style.margin = '0 auto'
myH1.style.textAlign = 'center'*/
