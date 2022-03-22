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