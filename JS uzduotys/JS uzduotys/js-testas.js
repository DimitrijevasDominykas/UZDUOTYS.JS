/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

//kaip supratau skaiciui reikejo suteikti kazkokia valiuta

// let number=1000;
// let number2=1000;
// number= number.toLocaleString('en-US',{style:'currency',currency:'EUR'});
// number2= number2.toLocaleString('en-US',{style:'currency',currency:'USD'});

// console.log(number);
// console.log(number2);

// // velgi,bandziau atvaizduot ne tik skaiciu,bet ir eurus

// let number=Math.floor(Math.random()*1000)+1;
// number= number.toLocaleString('en-US',{style:'currency',currency:'EUR'});

// let number=Math.floor(Math.random()*1000)+1;
// number= number.toLocaleString('en-US',{style:'currency',currency:'USD'});

// console.log(number);
// console.log(number2);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
//nezinau,man rodos pirmoj uzduoty padariau abi uzduotis,tai nenorejau rasyt to paties
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

let svoris = 80;
let ugis = 1.8;
let bmi = svoris / ugis ** 2;
let mazas_svoris=bmi <18.5;
let normalus_svoris=18.5<=bmi <25;
let virsvoris=bmi >25;

console.log(bmi);

if (bmi < 18.5) {
  console.log(`per mazas svoris`);
}
else if (bmi >18.5 && bmi <25 ) {
  console.log(`normalus svoris`);
}

if (bmi >=25) {
  console.log(`virsvoris`);
  return 0;
}

//1 variantas

// let svoris = 80;
// let ugis = 1.8;
// let bmi = svoris / ugis ** 2;
// let viršsvoris = bmi > 25;
// let normalus = 18.5 <= bmi < 25;
// let mazas_svoris = bmi < 18.5;

// console.log(bmi, viršsvoris, normalus, mazas_svoris);

// if (bmi > viršsvoris) {
//   console.log(`yra virsvoris`);
// }
// if (bmi <= normalus) {
//   console.log(`normalus svoris`);
// }

// if (bmi < mazas_svoris) {
//   console.log(`mazas svoris`);
// }

//2 variantas

//Apsirasiau kintamuosius ir papildomus kintamuosius.
//Pirmu variantu bandziau bmi palygint su papild.kintamaisiai zinant ju skaicius
//Kitu variantu bandziau palygint kuno mases indexa su papildomais kintamaisiais.
//
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

let gimimo_metai = "October 19,1992";

let sekunde = 1000;
let minute = sekunde * 60;
let valanda = minute * 60;
let diena = valanda * 24;
let menesis = diena * 30;
let metas = diena * 365;
let gyvenimo_trukme = sekunde + minute + valanda + diena + menesis + metas;

let metai = Math.round(sekunde / metas);
let menesiai = metai * 12;
let dienos = metai * 365;
let valandos = Math.round(sekunde / valanda);
let sekundes = Math.round(sekunde / sekunde);

function gimimo_trukme() {
  "trukme metais:" +
    metai +
    "trukme menesiais:" +
    menesiai +
    "trukme dienom:" +
    dienos +
    "trukme valandom:" +
    valandos +
    "trukme sekundem" +
    sekundes;
}

//bandziau isskaidyt visa gyvenima i vis mazesnius kintamuosius,o paskui juos funkcijoj sudet.
//Bandziau isvest consolej,kad graziai ir atskirai parodytu metus,menesius,dienas ir t.t,bet nelabai isejo.

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.


*/
//bandziau pagal termometru rodyklius pasikurt fukcija,bet kazkodel nelabai suveike
function celsijusIFarenheita(celsijus) {
  farenheitas = (celsijus * 9) / 5 + 32;
  return farenheitas;
}
function farenheitasIcelsiju(farenheitas) {
  celsijus = ((farenheitas - 32) * 5) / 9;
  return celsijus;
}

console.log(celsijusIFarenheita(40));
console.log(farenheitasIcelsiju(104));

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let masyvas= [1,-2,-3,-4,-5,-6,-7,-8,-9,-10];
let pradzia=1;
let pabaiga=-10;
for(let i=0;i<masyvas.length;i++) {
  if(masyvas[i]  < 0 &&
  masyvas[i]>=start &&
  masyvas[i]<=end)
  {
    console.log(masyvas[i]);
  }
}


const number = [{ skaiciai: [1, -2, -3, -4, -5, -6, -7, -8, -9, -10] }];
console.log(number);
//Bandziau dar viduj funkcija det,bet nesigavo
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
//funkcija su for ciklu,kur mano zvaigzdute yra lygi mano i ir ja kartotu iki 5 kartu vis pridedant po 1
function zvaigzdutes(num) {
  let number='';
  for(let i=1; i<=num;i++) {
    console.log('*'.repeat(i));
  }
}
zvaigzdutes(5);

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

//sukuriau masyva,jo viduje 2 sarasus.
let vardai = {
  vardas: [`Tomas`, `Dainius`, `Paulius`, `Jonas`],
  vardas2: ["Tomas+", "Dainius+", "Paulius+", "Jonas"],
};
console.log(vardai);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

//parasiau konstanta,kuri nekinta
//pasirasiau kintamaji,ir sudejau visus skaicius,simbolius ir raides
// sukuriau funkcija kuri generuos bet kokia uzsifruota data(mano skaicius,raides ir simbolius)
const crypto = require('crypto')

const slaptazodis = (
  length = 12,
  characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => characters[x % characters.length])
    .join('')

console.log(slaptazodis())