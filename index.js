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



//pasinaudokite sukurtu objektu ir jo reiksmemis
//iveskite i console visa info apie pietus
//siandiena valgiau...

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

//baigiau ziuret 5sav 2d, 1:44:46;