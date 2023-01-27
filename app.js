/*var myname="john"
   myname="mamba"
   console.log(myname)
   let myName="john";
   myName="mamba";
   console.log(myName)
   const age =21;
   console.log(age);
   let city;   inicijalizacija
   city= "novi pazar";  deklaracija
   console.log(city);
   const name = +prompt("unesite vase ime");

        return 5*5;
    }
    const rezultat = kvadratOdPet();
    console.log(rezultat);
    let arr =[3, 4 ,5 ,6]
    for (let i=0; i<arr.length;i++)
    {
        arr[i]=arr[i]*arr[i];
    }
    console.log("FORNIZ",arr);
    const mapiraniNiz=arr.map(function (el, index ,array){
        return el*el;
    });
    console.log("Mapirani niz"  ,mapiraniNiz);
    const stringNiz=arr.map(function(gel, index, array){
        return gel.toString();
    })
    console.log("string niz",stringNiz);
    const koren=arr.map(function(kor){
        return Math.sqrt(kor);
    });
    console.log("koren",koren);
    const novaF=arr.map(function(ff, index){if
        (index %2 !==0){
            return 2+ff*(ff);
        }

    })
    console.log(novaF);
   map je callback funkcija

   filter funkcija
    const numbers =[2, 3, 10, 11, 32, 23, 44, 57, 60];
    const evenNumbers = numbers.filter(function(el, index){
        if(el%2 ===0){
            return el;
        }
    })
    console.log(evenNumbers);
    const names =["Faris", "Alen","Nedim","Esma","Demir","Osman","Osman","Umer","Asmir","Zein"];
    const shortNiz = names.filter(function(name, i){
        if (
            name.length <=4
        ){
            return name;
        }
    });
    console.log(shortNiz);
    const capitalA = names.filter(function(name){
        if (name.charAt(0).toUpperCase === "A")
        return name;
    })
    console.log("prvoslovo",capitalA);
    console.log(names)
   
  let imena = ["'Mamba jhfief', 'ja dkfje', 'jae efef', 'ge esdf', 'ti fef'"];
  const initials =imena.map (function(name,i){
      const splitted = name.split ("")
      const nameInital =splitted[0].charAt[0]
      const lastNameInital =splitted[1].charAt[0]
      return nameInital + lastNameInital

  })
  console.log(initials);

  const niz = [1,2,3,4,5,6,7,8,9,10];

   Reduce metoda prima dva parametra, funkciju i pocetnu vrednost
   Ako nema pocetne vrednosti , ona je pocetna vrednost prvi clan niza
   Reduce metoda kao povratnu informaciju ima samo jednu vrednost

  const SrednjaVrednost= niz.reduce(
      function sabiranjeSvih(prethodna,sadasnja){
      return prethodna+sadasnja;
  },0)/niz.length;
  console.log(`SrednjaVrednost  niza je ${SrednjaVrednost}`);

     / *** Primer za pocetnu vrednost
     2.Min i Max vrednost u nizu
    const Max = niz.reduce(
        function maksVrednost(prethodna,sadasnja){
            if(prethodna === null || sadasnja > prethodna){
                console.log("Prethodna:",prethodna)
                console.log("Sadasnja:",sadasnja)

                return sadasnja;

            }

            return prethodna;

        },null);
        console.log(`Najveca vrednost u nizu je ${Max}`);
          1.

     Primer za Mi nimalnu vrednost

       const Min = niz.reduce(
            function maksVrednost(prethodna,sadasnja){
                if(prethodna === null || sadasnja < prethodna){
                    return sadasnja;
                }
                return prethodna;

            },null);
            console.log(`Najmanja vrednost u nizu je ${Min}`);

      *** Primer za pocetnu vrednost
     3.Spajanje clanova niza koji samo po sebi jesu niz u obicne clanove.

  const nizSaNizovima = [1,2,[3,4,5],[6,7],8,[9,10]];

  const nizBezNizova = nizSaNizovima.reduce(
      function odgradjivanje(prethodna,sadasnja,index,array){
      return prethodna.concat(sadasnja);
        []+1
       [1]+2
       [1,2].concat([3,4,5]) -> [1,2,3,4,5]
        [1,2,3,4,5].concat([6,7]) -> [1,2,3,4,5,6,7]

  },[])
  console.log(nizSaNizovima);
  console.log(`Niz nakon reduce metode`,nizBezNizova);
  const articles = [100, 100, 300, 400, 1000];
  const total = articles.reduce(function (prev, curr){
      return prev + curr;
  })
  console.log(total);
const numbers=[2,3,5,8,10]
const mappedAndFiltered = numbers.reduce (function(prev,curr){
const squared = curr * curr;
if ( squared %2 === 0) {
    prev.push(squared)
}
return prev;
},[])
console.log(mappedAndFiltered);

const niz = [1,2,3,4,5,6,7,8,9,10];

 Reduce metoda prima dva parametra, funkciju i pocetnu vrednost
 Ako nema pocetne vrednosti , ona je pocetna vrednost prvi clan niza
 Reduce metoda kao povratnu informaciju ima samo jednu vrednost

const SrednjaVrednost= niz.reduce(
    function sabiranjeSvih(prethodna,sadasnja){
    return prethodna+sadasnja;
},0)/niz.length;
console.log(`SrednjaVrednost  niza je ${SrednjaVrednost}`);

   / *** Primer za pocetnu vrednost
   2.Min i Max vrednost u nizu
  const Max = niz.reduce(
      function maksVrednost(prethodna,sadasnja){
          if(prethodna === null || sadasnja > prethodna){
              console.log("Prethodna:",prethodna)
              console.log("Sadasnja:",sadasnja)

              return sadasnja;

        

          return prethodna;

      },null);
      console.log(`Najveca vrednost u nizu je ${Max}`);
       1.

  Primer za Mi nimalnu vrednost

     const Min = niz.reduce(
          function maksVrednost(prethodna,sadasnja){
              if(prethodna === null || sadasnja < prethodna){
                  return sadasnja;
              }
              return prethodna;

          },null);
          console.log(`Najmanja vrednost u nizu je ${Min}`);

*** Primer za pocetnu vrednost
3.Spajanje clanova niza koji samo po sebi jesu niz u obicne clanove.

const nizSaNizovima = [1,2,[3,4,5],[6,7],8,[9,10]];

const nizBezNizova = nizSaNizovima.reduce(
    function odgradjivanje(prethodna,sadasnja,index,array){
    return prethodna.concat(sadasnja);
      []+1
     [1]+2
     [1,2].concat([3,4,5]) -> [1,2,3,4,5]
      [1,2,3,4,5].concat([6,7]) -> [1,2,3,4,5,6,7]

},[])
console.log(nizSaNizovima);
console.log(`Niz nakon reduce metode`,nizBezNizova);

//Suma clanova u nizu sa reduce metodom
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
sum = arr.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum);
// max value u nizu
max = arr.reduce(function (prev, curr) {
  if (prev === null || prev < curr) {
    return curr;
  }
  return prev;
}, null);
console.log(max);
// min value u nizu
min = arr.reduce(function (prev, curr) {
  if (prev === null || prev > curr) {
    return curr;
  }
  return prev;
}, null);
console.log(min);
srednjaVrednost = arr.reduce (function (prev, curr) {
return prev + curr / arr.length;
},0);
console.log("niz",arr,"duzina niza",arr.length,"suma niza",sum)
console.log(srednjaVrednost); 
*/

// for (let el = 0; el < niz.length; el++){
// niz[el] = niz[el] * niz[el];
// }
let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20,
    30, 35, 40, 45, 50, 52, 54, 56, 58, 60, 61, 63,
    65, 67, 69, 70, 75, 80, 82, 84, 86, 88, 90, 91, 93, 95, 97, 99, 100];
let names = ["Wick", "Luffy", "Sparrow", "Morgan", "James",
    "Future", "Akon", "Travis", "Drake", "Hamdo", "Edo", "Alen", "Osman",
    "Dzenis", "Ahmed"];
    
let nizz = niz.map(el => el * el);
let nizMapSuma = niz.map(el => el + el);
let nizNeparni = niz.filter(i => i % 2 !== 0);
let nizParni = niz.filter(i => i % 2 === 0);
let nizSqrt = nizParni.map(s => Math.sqrt(s));
let nizSqrtN = nizNeparni.map(s => Math.sqrt(s));
let namesS = names.filter(imena => imena.charAt(0) !== "A");



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    30, 35, 40, 45, 50, 52, 54, 56, 58, 60, 61, 63,
    65, 67, 69, 70, 75, 80, 82, 84, 86, 88, 90, 91, 93, 95, 97, 99, 100];
let arrSum = arr.reduce((a, b) => (a+b), 0);
let arrDiv = arr.reduce((a, b) => (a + b), 0) / arr.length;
let arrMax = arr.reduce((a, b) => { if (a === 0 || a < b) return b; }, 0);
let arrMin = arr.reduce((a, b) => { if (a === 0 || a > b) return b; else return a; }, 0);
const nizSaNizovima = [1, 2, [3, 4, 5], [6, 7], 8, [9, 10]];
let nizBezNiza = nizSaNizovima.reduce((a, b) => a.concat(b),[]);

console.log("Prvi niz", niz, "Niz imena", names, "Drugi niz", arr);
console.log("Proizvod map niza", nizz, "Suma map niza", nizMapSuma);
console.log("Filter neparnih brojeva", nizNeparni, "Filter parnih brojeva", nizParni);
console.log("Koren parnih", nizSqrt, "Koren neparnih", nizSqrtN);
console.log("Reduce suma niza", arrSum);
console.log("Srednja vrednost niza", arrDiv);
console.log("Max vrednost niza", arrMax);
console.log("Min vrednost niza", arrMin);
console.log("Filter imena ", namesS);
console.log(nizSaNizovima);
console.log(nizBezNiza);