console.log('JS ketvirtas failas')
// kad nesimaisytu su To Do List , susikuriau nauja JS faila

// stringu masyvams naudojami metodai
//https://www.w3schools.com/jsref/jsref_obj_string.asp

//<<< Uzduotis >>>

// sukurkite funkcija kuri pasleps didziaja dali funkcijai paduoto teksto
// paslepk("") -> ""
// paslepk("1") -> "1"
// paslepk("12") -> "#2"
// kol stringas yra trumpesnis nei 5 simboliai, rodome tik paskutini skaiciu
// jei stringas yra ilgesnis nei 5 - rodome paskutinius 4 simbolius, visa kita paslepta
// paslepk("123456789") -> "#####6789"
/*
function paslepk(str) {
    let tempValue = '';
    
    if(str.length === 0 || str.length === 1 ) {
      return str
    } else if(str.length > 1 && str.length < 5) {
      let lastSymbol = str[str.length - 1];
      let symbolsToHide = str.length -2; // -2 nes isimame paskutini simboli
      for(let i = 0; i <= symbolsToHide; i++) {
        tempValue += '#'
      }
     tempValue += lastSymbol
    } else {
      let lastSymbols = str.slice(-4);
      let symbolsToHide = str.length -4;
  
      for(let i = 0; i < symbolsToHide; i++) {
        tempValue += '#'
      } 
      tempValue += lastSymbols
    }    
     return tempValue
  }
  console.log(paslepk('12345678'))
*/
//arba kitas varijantas
  /*
  function slepk(word) {
    let bb = "#";
  if (word.length == 0) {
       return " ";
  } else if (word.length == 1) {
       return word;
  } else if (word.length <= 5) {
       return bb.repeat(word.length-1)+word.slice(word.length-1);
  } else {
       return bb.repeat(word.length-4)+word.slice(word.length-4);
  }
  } 
  
  console.log(slepk('12345678'))
*/

  //<<< uzduotis >>>

// funkcija kuri isvalys visus stringus is masyvo
// [1, "a", "b", 0, 15]) ->  [1, 0, 15]
/*
function removeLetters(arr){
    console.log(arr.filter(item => typeof item === 'number'))
}
removeLetters([1, "a", "b", 0, 15, 1.5, undefined])
*/

//<<< uzduotis >>>

// funkcija kuri surusiuos masyve esancius stringus pagal ilgi
// ["Google", "Apple", "Microsoft"] -> ["Apple", "Google", "Microsoft"]

// funkcija kuri surusiuos masyve esancius stringus pagal ilgi
// ["Google", "Apple", "Microsoft"] -> ["Apple", "Google", "Microsoft"]
/*
const myArr2 = ["Google", "Apple", "Ax", 'A', 'x', 'b', "Microsoft"]
function sortStringsByLength(arr) {
  let arrayOfLenght = arr.map(item => item.length);
  arrayOfLenght.sort(function(a, b) {
    return a - b;
  });

  const sortedArr = [];
  // arrayOfLenght - [1, 2, 5, 6, 9]
  // arr - ["Google", "Apple", "Ax", 'x', "Microsoft"]
  arrayOfLenght.forEach(item => {
    arr.forEach(string => {
      // pirmas ratas
      // 1 === x.length 
      if(item === string.length){
        // sortedArr.push(x)
        sortedArr.push(string)
        // susirandam x indexa musu masyve myArr2
        let indexOfThisString = arr.indexOf(string)
        // is myArr2 pasalinam x (nurodome x indeksa ir kiek elementu ismesime)
        arr.splice(indexOfThisString, 1);
      }
    })
  })

console.log(sortedArr)
}

sortStringsByLength(myArr2)
*/

// kitas budas

/*
let arr = ["Google", "Apple", "Microsoft", "aaasdkjasdfdjasd", "as", "as"];

function rusiuojam(arr) {
    let newArr = [];
    let newerArr = [];
    arr.forEach(item => {
        let newObj = {
            string: item,
            length: item.length
        }
        newArr.push(newObj);
    })

    newArr.sort((a, b) => {
        return a.length - b.length;
    })
    newArr.forEach(item => {
        newerArr.push(item.string);
    })
    return(newerArr)
}

console.log(rusiuojam(arr))
*/
//trumpiausias budas rusiuoti
/*
const myArr2 = ["Google", "Apple", "Ax", 'A', 'x', 'b', "Microsoft"]
const sortByLeght = myArr2.sort((a,b) => a.length - b.length);
console.log(sortByLeght);
*/
//<<< uzduotis >>>
// sudeti du maziausius skaicius masyve ir grazinti ju suma
// [19, 5, 42, 2, 77] -> 7
/*
function sumTwoLowestNums(arr){
    arr.sort((a, b) => a - b)
    return arr[0] + arr[1]
}
console.log(sumTwoLowestNums([19, 5, 42, 2, 77, 1]))
*/

//<<< uzduotis >>>
// funkcija kuri priima du is triju galimu variantu "zirkles", "popierius", "akmuo"
// grazina nugalejoja kasLaimes(zirkles, akmuo) - > akmuo
// zirkles, popierius -> zirkles
// popierius, akmuo -> popierius
/*
function letsPlay(a, b){
if (a === 'akmuo' && b === 'zirkles' || b === 'akmuo' && a === 'zirkles') return'laimi akmuo';
if (a === 'zirkles' && b === 'popierius' || b === 'zirkles' && a === 'popierius') return'laimi zirkles';
if (a === 'akmuo' && b === 'popierius' || b === 'akmuo' && a === 'popierius') return'laimi popierius';
else{
    return 'lygiosios'
}
}
console.log(letsPlay('popierius', 'popierius'))
*/

//<<< uzduotis >>>
