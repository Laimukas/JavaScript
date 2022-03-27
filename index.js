// skaiciai
console.log('Hello People')
/*
let skaicius = 5
let kitasSkaicius = 7
kubas = skaicius ** 3
console.log(kubas)
*/
/*
let vardas = 'Laimutis';
let surname = 'Kestauskas';
let gimimoMetai = 1982;
let dabartiniaiMetai = 2022;
//let atsakymas = vardas + " " + surname + " yra " + (dabartiniaiMetai - gimimoMetai) + " metu"
//arba kitas varijantas
let atsakymas = `${vardas} ${surname} - jam yra ${dabartiniaiMetai - gimimoMetai} metu`
console.log(atsakymas);
console.log(atsakymas.length);
let kitasVardas = "Mano vardas yra";
console.log(kitasVardas.toLowerCase());
console.log(kitasVardas.toUpperCase());
console.log(kitasVardas.charAt(0));
*/

//Antra JS paskaita

//https://www.w3schools.com/jsref/jsref_obj_string.asp
//panaudojimas su pavyzdziais

// -----------if panaudojimas --------------
/*
let data = 2;
if (data < 2){
    console.log(true)
} else if ( 2 < data ){
    console.log (false)
} else {
    console.log('Hi')
}
*/

// ------Uzduotis
//panaudoti promt kad vartotojas ivestu suma
//su zinute jusu moketina suma

//Uzduotis parasyti arbatpinigiuu skaiciuokle
//jei suma iki 20eur,mokame 10%
//nuo 20 iki 50 eur,mokame 7.5%
//virs 50eur - 5%
//Reikia kad konsoleje parasytu
//pilna sumoketa suma,
//arbatpinigiu dydi, ir pradine saskaita
/*
let ivestaSuma = parseInt(prompt('Jusu moketina suma yra:'))
let arbatpinigiai = 0;
let galutinesuma;
if (ivestaSuma <= 20) {
  arbatpinigiai = ivestaSuma  * 0.1;
} else if ( 20 < ivestaSuma && ivestaSuma <= 50) {
  arbatpinigiai = ivestaSuma * 0.075;
} else {
  arbatpinigiai = ivestaSuma * 0.05
}
galutinesuma = `Visa sumoketa suma ${ivestaSuma + arbatpinigiai}
 arbatpinigiai yra ${arbatpinigiai} saskaita buvo ${ivestaSuma}
`
console.log(galutinesuma)
*/

//---------- switch naudojimas -----------------
/*
let number = parseInt(prompt('enter the number'));
switch(number) {
    case 1:
        console.log('print 1')
        break; //break is necesery
        //be break kodas tiesiog judes toliau
        //kitu atveju sekantys case nebus skaitomi
    case 2:
        console.log('print 2')
        break;
    default:
        console.log('print Default')
    //jei ne viena is auksciau isvardytu salygu neiviko
    //atlikti tai
    // https://www.w3schools.com/js/js_switch.asp
}
*/

// ------ Array --- Arays , masyvai , duomenu rinkinys / 
// kolekcija, duomenys daznai yra grupuojami ir del patogumo
//laikomi masyvuose

//arejuje duomenys gali buti ivairaus tipo, pvz:
// let vartotojas = ['Str' , 23 , true , false , undefined ,
// null];

//jei nurodysime,kad kuriame reiksme kurios nera
/*
mixedValue[8] = false;
console.log(mixedValue)
console.log(mixedValue[6])
*/
//bus sukurtos tuscios reiksmes su value undefined

//Push - Pop - Shift - Unshit ir kiti
//Push to add item at the end of the array
//Pop remove last item

// Uzduotis: pasalinti lempa ir stalas is array
// prideti spintele i pirma array vieta
// prideti kede i paskutine
/*
const baldai = ['lempa','lentynos','sofa','stalas']
baldai.splice(0,1,"Spintele")
baldai.splice(3,1,"Kede")
console.log(baldai)
*/
//naudoti Array funkcijoms atlikti
//https://www.w3schools.com/jsref/jsref_obj_array.asp
// concat
// includes
// indexof
// reverse
// slice
// splice
// sort -mdn sorting by UTF

// Stringu ir Array metodu apjungimas
// Sveiki -> ikievS

// -------- Nested Arrays ---------
/*
const nestedArr = [
    ['X', null, '0'],
    ['0', null, 'X'],
    ['0','X', null]
]
//norint pasiimt pirma eilute
console.log(nestedArr[0])
//jei is pirmos eilutes norim x pasiimt tai rasom
console.log(nestedArr[0][0])
*/


//----- Objects -----------

// Key value pairs
// key kaire puse, value desine
/* 
name: 'Jonas';
age: 21;
*/
//css stiliai yra kazkas panasaus i objekta
/*
body {
    color: red;
}
*/
//object literal
/*
const saldytuvas = {
    morkos: 3,
    kiausiniai: 12,
    sviestas: 0.5,
    vynuoges: 'nemazai',
    darzoves: ['morkos','pomidoras','salieras','cukinija']
}
*/
//dar pvz kaip galima apsirasyti platesni Array
/*
const duonbaze = [{}, {}, {}, {}, {}]
*/
// tvarka objekte nesvarbi
// kaip pasiekti reikiamas reiksmes
// pvz is ankstesnio apsirasymo su saldytuvu
/*
saldytuvas['morkos']
//arba galima paprasciau
saldytuvas.darzoves
//jei norim dar giliau
saldytuvas.darzoves[2]
*/
//ats bus 3, ir t.t. su kitais jei norim koki tai atsakyma isgaut

// ["name"] or .name
// visos key value objekte yra konvertuojamos is string
/*
const apdovanojimai =
{
    'pirma vieta': 'JAV',
    2: 'UK',
    3: 'BR'
}
apdovanojimai[1]
apdovanojimai['1']
//kaip prideti nauja reiksme
apdovanojimai['4'] = 'Lietuva';
//kaip perrasyti
apdovanojimai['2'] = 'GB'
//arba jei su ankstesniu pvz tai butu
saldytuvas.vynuoges = 'nebera'
*/
//cia viskas veikia kaip ir su masyvais

//<<<<<<< uzduotis >>>>>>>>
//susikurti objekta dienos pietus
//ingredientai
//kaina
//ivertinimas
//vieta kur valgete
//ar rekomenduotumete kitiems
/*
    sriub = {
        pavadinimas: 'sriuba',
        ingredientai: ['barsciai','bulves','svogunai','lasinukai'],
        kaina: 2.5,
        ivertinimas: 4.5,
        vieta: 'Kaunas',
        rekomendacija: true
    }
    cep = {
        pavadinimas: 'cepelinai',
        ingredientai: ['bulves','svogunai','lasinukai','farsas'],
        kaina: 3.5,
        ivertinimas: 4.7,
        vieta: 'Karmelava',
        rekomendacija: true
    }
    sasl = {
        pavadinimas: 'saslykai',
        ingredientai: ['mesa','svogunai','ryziai','darzoves'],
        kaina: 3,
        ivertinimas: 4.8,
        vieta: 'Akademija',
        rekomendacija: true
    }
    kebab = {
        pavadinimas: 'kebabai',
        ingredientai: ['mesa','darzoves','blynas','padazas'],
        kaina: 2.5,
        ivertinimas: 3,
        vieta: 'Slabotke',
        rekomendacija: false
    }

const ManoPietus = [sriub, cep, sasl, kebab]
console.log(ManoPietus)
console.table(ManoPietus)
kaValgiau = `siandiena valgiau ${ManoPietus[2].pavadinimas}`
console.log(kaValgiau)
*/

//Array of object - how would we access values?
//JSON placeholder data

//------------ FOR LOOPS -----------------//
// kur naudojami, kaip pvz Youtube video tipai ir kazkas pan.

//nurodome, kad tai loop su for
//nurodome, kad naudosime kintamaji ir gali buti bet kokia raide
//nurodome nuo kokios reiksmes ji prasideda ir 
//kokia reiksme ji pasibaigia
// i ++ rodo, kad galiausiai i reiksme yra padidinama vienetu
// i = 1, ar 1 <= 10? jei taip i++ ir atliekame veiksma
/*
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
*/
//SVARBU gerai apsirasyti salygas, kad nesukurti begalinio ciklo
//for (let i = 1; i > 0; i++) {
//    console.log('Narsyklei nepatiks :DDD')
//}

//<<< Uzduotis >>>
// parasyti Loop kuris prades grazinti skaicius nuo
// 20 ir is skaiciaus atims 4 kiekvieno ciklo metu
// paskutinis isvestas i konsole skaicius turi buti 0
/*
for (let i = 20; i >= 0; i=i-4){
    console.log(i)
}
*/
//<<< uzduotis >>>
//parasyti Loop'a kuris isspausdins i konsole
//visus lyginius skaicius nuo 1 iki 17
// yra keli galimi budai
/*
const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
for (let i = 0; i <= skaiciai.length -1; i++){
    if(skaiciai[i] % 2 === 0){
        console.log(skaiciai[i])
    }
}

//tinka ir 
for (let i = 0; i < skaiciai.length; i++){
    if(skaiciai[i] % 2 === 0){
        console.log(skaiciai[i])
    }
}
*/
//jei reik nelyginiu skaiciu tada keiciasi minimaliai
/*
const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
for (let i = 0; i < skaiciai.length; i++){
    if(skaiciai[i] % 2 === 1){
        console.log(skaiciai[i])
    }
}
*/

// Looping trough arrays
/*
const myArr = ['One', 'Two','Sofa','Stalas','test']
//why i have to be less then myArr.length?
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}
*/
//tai cia svarbu jog teisingai apsirasytume i reiksmes,
//nes siuo atveju negalim naudot i<=myArr.lengh,kadangi ismes
//undefined, nebent dar darasytume i <= myArr.lengh -1

//<<<  uzduotis >>>
//Kaip isvesti visas reiksmes i console
//Tik pradedant nuo paskutines
/*
const myArr = ['One', 'Two','Sofa','Stalas','test']
for (let i = myArr.length -1; i >=0; i-- ) {
    console.log(myArr[i])
}
*/

//<<< uzduotis >>>
//kaip pereiti per visa Array ir isvesti i console skaicius kurie didesni uz 8?
/*
const skaiciai = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const daugiauNeiAstuoni = [];
for (let i = 0; i < skaiciai.length; i++) {
    if(skaiciai[i] > 8) {
        daugiauNeiAstuoni.push(skaiciai[i])
    }
}
console.log(daugiauNeiAstuoni)
*/
//<<< uzduotis >>>

//naudojantis for loopu surasti didziausia skaiciu
/*
const numbersArr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let didziausiasSkaicius = 0;
for (let i = 0; i <= numbersArr.length -1; i++) {
    if(didziausiasSkaicius < numbersArr[i]){
        didziausiasSkaicius = numbersArr[i]
    }
}
console.log(didziausiasSkaicius)
*/

// ---  Nested Loop ---
/*
for (let isorinis = 1; isorinis <= 4; isorinis++){
    console.log(`Isorinis loop'as sukasi ${isorinis} karta`)
    for(let vidinis = 1; vidinis < 5; vidinis++) {
      console.log(`  Vidinis loopas sukasi ${vidinis} karta`)
    }
  }
  */
  //paaiskinimas: pirmiau prasisuka isorinis loopas ir tada isijungia vidinis
  //kai prasisuka visi vidiniai,tada vel pereinama prie isorinio
  //sekancio ciklo.ir taip judama toliau


  //<<< uzduotis >>>
//isvesti i console visas reiksmes
//nurodyti kokios eilutes reiksmes isvedamos
/*
const activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
  ];
  for (let i = 0; i < activities.length; i++) {
      console.log(`Eilute ${i}`)
      for (let j = 0; j < activities[i].length; j++) {
          console.log(activities[i][j])
      }
  }
*/

// ------- While loop ------
// jis cia niekada neapsaugo nuo begalinio loopo
//patogu naudoti tada kai nezinom kiek iteraciju reiks naudoti
/*
let skaicius = 0;
while(skaicius < 10) {
    skaicius++
    console.log(skaicius)
}
*/

//kitas pvz
/*
const SLAPTAS_SKAICIUS = 52;
let spejimas = parseFloat(prompt('Spekite skaiciu')); 52
while(spejimas !== SLAPTAS_SKAICIUS) { // false
  spejimas = parseFloat(prompt('Spekite skaiciu'));
}
*/
//galime nutraukti while ir for loopus su break

// ------ for ... of loop ------------

// << uzduotis >>

//for....of pagalba sukurti nauja arr skaiciaiKvadratu
//kuris grazins pradini skaiciu pakelta kvadratu
/*
const skaic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const skaiciai2 = [];
for (let i of skaic) {
  console.log(i ** 2);
  skaiciai2.push(i ** 2);
}
console.log(skaiciai2)
*/

// ----- TODO List task -------------------
// Galimos komandos
// new - leidzia sukurti nauja irasa
// list - isveda i console visus musu sukurtus darbus
// kiekvienas is darbu isvedamas su indexu, kad zinotume
// koki darba trinti jei jis atliktas
// delete - pasalina nurodyta darba is saraso
// quit - uzdaro aplikacija
/*
const todoList = ['Pradeti nuo q komandos', 
  'panaudoti prompt, kad gauti duomenis', 
  'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
  ];

let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')

while(vartotojoIvestaKomanda !== 'quit') {
  if (vartotojoIvestaKomanda === 'new') {
    let naujasDarbas = prompt('Iveskite nauja darba i darbu sarasa');
    todoList.push(naujasDarbas);
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  } else if (vartotojoIvestaKomanda === 'list') {
    console.log(`Jusu darbu sarasas:`);
    for (let i = 0; i < todoList.length; i++) {
      console.log(`----------------------`);
      console.log(`${i} - ${todoList[i]}`);
      console.log(`----------------------`);
    } 
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  } else if (vartotojoIvestaKomanda === 'delete') {
    let index = parseInt(prompt('Iveskite norimo istrinti darbo numeri'));
    todoList.splice(index, 1)
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
  } else {
    vartotojoIvestaKomanda = 'quit'
    console.log('Ivesta neteisinga komanda')
  }
}
*/


// ----------- Funkcijos --------------
/*
let skaicius = 5;
// function definition
function doSomething(skaicius) { //arguments goes here ()
    if (skaicius > 5) {
    }
    return 'Something'
}
*/
// console.log(doSomething)
//let atsakymas = doSomething()
// kodel nieks nepadaryta? :)

// uzduotis yra funkcijos parametras
/*
function padaryk(uzduotis){ // parametras yra reiksme kuria funkcija priima
    console.log(`Pradedu daryti ${uzduotis}`)
}
padaryk('darbus') // cia darbus jau yra argumentas
*/
// argumentas yra tai ka perduodame funkcijai
/*
function pakartok(num, fraze){
    for (let i = 0; i < num; i++){
        console.log(fraze)
    }
}
pakartok(5, 'Sveiki zmones!')
//kas bus jei darysime taip
pakartok('Sveiki zmones', 5)
*/
//esme: kokia tvarka nurodom kintamuosius,
//tokia tvarka ir turime juos apsirasyt
/*
function sudek(pirmasSkaicius, antrasSkaicius){
    //return naudojame kai norime grazint reiksme is funkcijos
    //console.log tiesiog atspausdina reiksme taciau mes negalime jos niekur naudoti
    //nes reiksme nera issaugoma
    return pirmasSkaicius + antrasSkaicius
    //return sustabdo tolimesni funkcijos vykdyma
    console.log('Sitas kodas niekada neivykdys')
    //cia nieko neprintins nes consola iraseme po return
}
console.log(sudek(1, 2))
*/
//<<< uzduotis >>>
//parasyt funkcija kuri du duotus skaicius panaudoja uzduociai
//pirma skaiciu kelia antro skaiciaus laipsniu
/*
function duSkaiciai(skaicius, laipsnis){
    console.log(skaicius ** laipsnis);
}
duSkaiciai(5, 3)
*/
//tas ir gerumas jog funkcija naudojant nereik apsirasinet kazkaip
//kintamuju, juos kaip siam pvz apsirasom paprastai

//<<< uzduotis >>>
//funkcija priima du skaicius
//ir atprintina didesni is ju
/*
function didesnisSkaicius(a,b){
 if (a > b){
     console.log('didesnis skaicius yra ',a)
 } else if (a < b) {
    console.log('didesnis skaicius yra ',b)
 } else{
     console.log('skaiciai lygus')
 } 
}
didesnisSkaicius(7,2)
*/
//<<< uzduotis >>>
//parasyti funkcija kuri ivedus skaiciu parasys kokia tai diena
//kaip pvz jei 1 tai pirmadienis,jei 2 tai antradienis ir t.t.
/*
function savaitesDiena(a){
    if (a == 1)
    console.log('dabar pirmadienis')
    else if (a == 2)
    console.log('dabar yra antradienis')
    else if (a == 3)
    console.log('dabar yra treciadienis')
    else if (a == 4)
    console.log('dabar yra ketvirtadienis')
    else if (a == 5)
    console.log('dabar yra penktadienis')
    else if (a == 6)
    console.log('dabar yra sestadienis')
    else if (a == 7)
    console.log('dabar yra sekmadienis')
    else
    console.log('savaiteje tokios dienos nera')
}
savaitesDiena(7)
*/
//<<< uzduotis >>>
// susumuoti visus skaicius masyve.
/*
const sudetiVisusSkaicius = [12, 2, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13, undefined]
console.log(sudetiVisusSkaicius)
function sudetiVisusMasyvoSkaicius(arr) { //arr yra arejaus sutrumpinimas
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(Number.isInteger(arr[i])) {//tikrinam ar kazkuris elementas yra skaicius
      sum = sum + arr[i]
    }
  }
  console.log(sum)
}
sudetiVisusMasyvoSkaicius(sudetiVisusSkaicius)
*/

//<<< uzduotis >>>
//parasyti funkcija kuri turetu startini ir galini skaiciu
//musu atveju naudosime skaicius 0 ir 100
//susikurti masyva su skaiciais nuo 0 iki 100 nerasant viso masyvo ranka
//ties kiekvienu skaiciu tegu tikrina ar jis yra
//3 kartotinis ir kad ji atspausdintu
//ta pati padaryti su 5 kartotiniais
//jei skaicius dalinasi is 3 ir is 5 be liekanos
//'Sis skaicius yra - triju ir penkiu kartotinis'
//galiausiai i konsole isvesti tris masyvus kuriuose bus
//triju,penkiu bei triju su penkiais kartotiniai
/*
function kartotiniai(startinisSkaicius, galinisSkaicius){
    // const skaiciai = Array.from(Array(100).keys());
    const skaiciai = [];  
    const trijuKartotiniai = [];
    const penkiuKartotiniai = [];
    const trijuIrPenkiuKartotiniai = [];
    for (let i = startinisSkaicius; i <= galinisSkaicius; i++){
      skaiciai.push(i)
    }
    console.log('skaiciai', skaiciai)
   
  
    for (let i = 0; i < skaiciai.length; i++) {
      if (skaiciai[i] % 3 === 0 && skaiciai[i] % 5 === 0) {
        trijuIrPenkiuKartotiniai.push(skaiciai[i])
        // trijuKartotiniai.push(skaiciai[i]);
        // penkiuKartotiniai.push(skaiciai[i]);
      } else if (skaiciai[i] % 3 === 0) {
        trijuKartotiniai.push(skaiciai[i]);
      } else if (skaiciai[i] % 5 === 0) {
        penkiuKartotiniai.push(skaiciai[i]);
      } 
    }
    console.log('triju', trijuKartotiniai)
    console.log('penkiu', penkiuKartotiniai)
    console.log('bendri', trijuIrPenkiuKartotiniai)
  }
  kartotiniai(0, 100)
  */

  //<<< Uzduotis >>>
  //Parasyti funkcija kuri priima Stringa
  //ir grazina ta pati stringa su pirma ir paskutine raide didziosiomis
  //gali buti vienas zodis, gali buti keli
  //pradziai padarykite kad tik stringo pirma ir paskutine raide padidina
  //Bonus uzduotis - papildyti funkcija,kad pakeistu visu zodziu stringe pirmas ir paskutines raides
/*
  function capitalize(str) {
    const arrayFromString = str.split(' ');
    const newArr = []
    console.log('Turimas textas:', arrayFromString)
    for (let i = 0; i < arrayFromString.length; i++) {
      let ilgisMinusVienas = arrayFromString[i].length - 1;
      if(arrayFromString[i].length === 1) {
        newArr.push(arrayFromString[i][0].toUpperCase());
      } 
      else {
        let capitalizedString = arrayFromString[i][0].toUpperCase() +
        arrayFromString[i].slice(1, arrayFromString[i].length -2) + 
        arrayFromString[i][ilgisMinusVienas].toUpperCase()
       newArr.push(capitalizedString);       
       console.log('Padidinus pirma ir galine raides gaunasi:', capitalizedString)
      }
    }
  }  
  capitalize('hkweki mwewqwy name iqweqws weqpw i o')  
*/

//<<< uzduotis >>>
// Parasyti funkcija kuri surusiuos skaicius esancius masyve nuo didziausio iki maziausio
/*const randomNumbers = [1, 22, 543, 2, 6, 12, 55, 86, 6, 9, 12, 31, 51, 92, 3]
// isvesti nauja masyva i console
function sortNumbersHighToLow(arr){
  console.log(arr.sort(function(a, b){return a-b}))
}
sortNumbersHighToLow(randomNumbers)
*/

//<<< uzduotis >>>
// Parasyti funkcija kuri suras vidurini zenkla Stringe ir isves ji i console
// jei stringe yra nelyginis simboliu skaicius, isvedame vidurini simboli
// jei lyginis, du vidurinius
/*
function grazinkViduriniSimboli(str){
  if (str.length % 2 === 0) { // lengt = 8
   // lyginis - 1 = nelyginis 
   // pirmas sprendimo budas
   
    let index = Math.floor((str.length - 1) / 2); // susirasti pirmo vidurinio stringo indexa
    console.log(str.slice(index, index + 2)) // pridedu 2 nes slice, neitraukia end indexo, todel + 1 netinka
     // gaunasi kad cia yra slice(1, 1 + 2)
     
     // antras sprendimo budas
    console.log(str.slice(str.length/2-1, str.length/2+1)); 
 } else {
   ///         [ T e s s i ] .length() - grazins 5
   ///         [ 0 1 2 3 4 ]
   let index = (str.length - 1) / 2;
   console.log(index); 
   console.log(str[index]) // str[2]
   }
 }
 
 grazinkViduriniSimboli('Tessi')
 */
//dar vienas varijantas
/*
function getMidSymbol(text){

  let midIndex = parseInt(text.length / 2);
  console.log(midIndex);

  if(text.length % 2 === 0){
      return `${text[midIndex -1]}${text[midIndex]}`;
  }
  capitalize('hkweki mwewqwy name iqweqws weqpw i o')
  
<<<<<<< HEAD
  return text[midIndex];
}

console.log(getMidSymbol("besikiskiakopusteliaudamasis"));
*/

// ---------- Function scope -------------
// jis nurodo / nusako kur yra pasiekiami kintamieji, kur juos galime naudoti
 /*console.log(secretNumber)

 let secretNumber = 12;*/
 // esmeje tas apsirasymas turi but paeiliui,siuo atveju nieko neisspausdins
 //nes console.log anksciau aprasytas nei kintamasis

//------------- Block scope ----------------
/*let num = 111;
if (num > 100){
  let kitasSkaicius = 100;
  let darKitas = 12;
}
console.log(kitasSkaicius)
console.log(num)*/
//kadangi aprasymas yra viduje,tai ir atsakymas ten turetu but aprasytas, o db
//nieko nemeta,nes atsakymas isorej aprasytas

/*
let kintamasis = 'kinta';
for (let i = 20; i < 25; i++) {
  let j = 'pastovus';
  if(i > 20) {
    console.log(i)
    console.log(kintamasis)
    console.log(j)
  }
}
console.log(i)
console.log(j)
//tikrinam kuriuos matys (spausdins),kurie uz borto liks :)
*/
/*
for (let i = 20; i < 25; i++) {
  console.log(i)
}
console.log(i)
*/
//paprastas pvz patikrint kur veiktu atsakymo aprasymas

//---------- Lexical scope ----------------------

// function in function - accessing variables
// kintamieji gali buti pasiekiami teviniuose blokuose
// bet tevinis blokas, negali pasiekti child bloko kintamuju

//------------ Function expressions --------------
/*
const functionExpression = function() {
  return 34 + 231
}
// issaugome funkcija be jokio pavadinimo ir priskiriame ja kintamajam
console.log(functionExpression())
*/
//<<< uzduotis >>>
//susikurti funkcija, kuri grazins true arba false priklausimai nuo to
// ar skaicius yra septyniu kartotinis ar ne,naudoti function expression
/*
const septyniuKartotinis = function(num) {
  if (num %7 === 0){
    console.log(true)
  } else {
    console.log(false)
  }
}
septyniuKartotinis(48)*/

//---------- Higher order functions --------------
// functions that returns functions
// or functions that uses other functions
/*
function addTen(func, num){
  console.log(func);
  console.log(num, 'num')
  //musu atveju gaunasi, kad sita vieta yra
  console.log(func(num))
  // konvertuojama i pridesiuDesimt(11)
}
function pridesiuDesimt(num){
  console.log('pridesiuDesimt funkcija gauna skaiciu', num)
  return 10 + num
}
// galiausiai gaunasi addTen(20, 11)
// addTen(pridesiuDesimt(10), 11)
addTen(pridesiuDesimt, 11)
*/
/*
function viesaFunkcija(){
  return function getData() {
    console.log('Slapat info')
  }
}
let slaptaInfo = viesaFunkcija();
console.log(slaptaInfo)
slaptaInfo()*/
/*
function viesaFunkcija(){
 function getData() {
    console.log('Slapat info')
  }
  getData()
}

viesaFunkcija()*/

//------------ Methods - functions inside the objects -----------------

//cia sena sintakse aprasytas metodas
/*
const oldSyntax = {
  gyvunai: ['suo', 'kate', 'liutas'],
  atspausdink: function() {
    console.log(10)
  }
}

//console.log(oldSyntax['gyvunai'])
console.log(oldSyntax.gyvunai) //galima tiesiog ir sitaip naudot
console.log(oldSyntax.atspausdink()) //be skliaustu vel nieko nerodytu
*/
//o cia nauja sintakse aprasytas metodas
/*
const newSyntax = {
  atspausdink() {
    console.log(20)
  }
}
newSyntax.atspausdink()*/

//<<< uzduotis >>>

// uzduotis suskikurti objekta kvadrato
// sukurti du metodus (plotas ir perimetras) kurie priims krastines ilgi
// kvadrato.plotas(10)  - grazins 100
// kvadrato.perimetras(10) - 40
/*
const kvadrato = {
plotas: function(length){
  console.log(length ** 2)
},
 perimetras: function(length) {
  console.log(length * 4)
}
}
kvadrato.plotas(10);
kvadrato.perimetras(10)
*/