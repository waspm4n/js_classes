// /*var myname="john"
//    myname="mamba"
//    console.log(myname)
//    let myName="john";
//    myName="mamba";
//    console.log(myName)
//    const age =21;
//    console.log(age);
//    let city;   inicijalizacija
//    city= "novi pazar";  deklaracija
//    console.log(city);
//    const name = +prompt("unesite vase ime");

//         return 5*5;
//     }
//     const rezultat = kvadratOdPet();
//     console.log(rezultat);
//     let arr =[3, 4 ,5 ,6]
//     for (let i=0; i<arr.length;i++)
//     {
//         arr[i]=arr[i]*arr[i];
//     }
//     console.log("FORNIZ",arr);
//     const mapiraniNiz=arr.map(function (el, index ,array){
//         return el*el;
//     });
//     console.log("Mapirani niz"  ,mapiraniNiz);
//     const stringNiz=arr.map(function(gel, index, array){
//         return gel.toString();
//     })
//     console.log("string niz",stringNiz);
//     const koren=arr.map(function(kor){
//         return Math.sqrt(kor);
//     });
//     console.log("koren",koren);
//     const novaF=arr.map(function(ff, index){if
//         (index %2 !==0){
//             return 2+ff*(ff);
//         }

//     })
//     console.log(novaF);
//    map je callback funkcija

//    filter funkcija
//     const numbers =[2, 3, 10, 11, 32, 23, 44, 57, 60];
//     const evenNumbers = numbers.filter(function(el, index){
//         if(el%2 ===0){
//             return el;
//         }
//     })
//     console.log(evenNumbers);
//     const names =["Faris", "Alen","Nedim","Esma","Demir","Osman","Osman","Umer","Asmir","Zein"];
//     const shortNiz = names.filter(function(name, i){
//         if (
//             name.length <=4
//         ){
//             return name;
//         }
//     });
//     console.log(shortNiz);
//     const capitalA = names.filter(function(name){
//         if (name.charAt(0).toUpperCase === "A")
//         return name;
//     })
//     console.log("prvoslovo",capitalA);
//     console.log(names)
   
//   let imena = ["'Mamba jhfief', 'ja dkfje', 'jae efef', 'ge esdf', 'ti fef'"];
//   const initials =imena.map (function(name,i){
//       const splitted = name.split ("")
//       const nameInital =splitted[0].charAt[0]
//       const lastNameInital =splitted[1].charAt[0]
//       return nameInital + lastNameInital

//   })
//   console.log(initials);

//   const niz = [1,2,3,4,5,6,7,8,9,10];

//    Reduce metoda prima dva parametra, funkciju i pocetnu vrednost
//    Ako nema pocetne vrednosti , ona je pocetna vrednost prvi clan niza
//    Reduce metoda kao povratnu informaciju ima samo jednu vrednost

//   const SrednjaVrednost= niz.reduce(
//       function sabiranjeSvih(prethodna,sadasnja){
//       return prethodna+sadasnja;
//   },0)/niz.length;
//   console.log(`SrednjaVrednost  niza je ${SrednjaVrednost}`);

//      / *** Primer za pocetnu vrednost
//      2.Min i Max vrednost u nizu
//     const Max = niz.reduce(
//         function maksVrednost(prethodna,sadasnja){
//             if(prethodna === null || sadasnja > prethodna){
//                 console.log("Prethodna:",prethodna)
//                 console.log("Sadasnja:",sadasnja)

//                 return sadasnja;

//             }

//             return prethodna;

//         },null);
//         console.log(`Najveca vrednost u nizu je ${Max}`);
//           1.

//      Primer za Mi nimalnu vrednost

//        const Min = niz.reduce(
//             function maksVrednost(prethodna,sadasnja){
//                 if(prethodna === null || sadasnja < prethodna){
//                     return sadasnja;
//                 }
//                 return prethodna;

//             },null);
//             console.log(`Najmanja vrednost u nizu je ${Min}`);

//       *** Primer za pocetnu vrednost
//      3.Spajanje clanova niza koji samo po sebi jesu niz u obicne clanove.

//   const nizSaNizovima = [1,2,[3,4,5],[6,7],8,[9,10]];

//   const nizBezNizova = nizSaNizovima.reduce(
//       function odgradjivanje(prethodna,sadasnja,index,array){
//       return prethodna.concat(sadasnja);
//         []+1
//        [1]+2
//        [1,2].concat([3,4,5]) -> [1,2,3,4,5]
//         [1,2,3,4,5].concat([6,7]) -> [1,2,3,4,5,6,7]

//   },[])
//   console.log(nizSaNizovima);
//   console.log(`Niz nakon reduce metode`,nizBezNizova);
//   const articles = [100, 100, 300, 400, 1000];
//   const total = articles.reduce(function (prev, curr){
//       return prev + curr;
//   })
//   console.log(total);
// const numbers=[2,3,5,8,10]
// const mappedAndFiltered = numbers.reduce (function(prev,curr){
// const squared = curr * curr;
// if ( squared %2 === 0) {
//     prev.push(squared)
// }
// return prev;
// },[])
// console.log(mappedAndFiltered);

// const niz = [1,2,3,4,5,6,7,8,9,10];

//  Reduce metoda prima dva parametra, funkciju i pocetnu vrednost
//  Ako nema pocetne vrednosti , ona je pocetna vrednost prvi clan niza
//  Reduce metoda kao povratnu informaciju ima samo jednu vrednost

// const SrednjaVrednost= niz.reduce(
//     function sabiranjeSvih(prethodna,sadasnja){
//     return prethodna+sadasnja;
// },0)/niz.length;
// console.log(`SrednjaVrednost  niza je ${SrednjaVrednost}`);

//    / *** Primer za pocetnu vrednost
//    2.Min i Max vrednost u nizu
//   const Max = niz.reduce(
//       function maksVrednost(prethodna,sadasnja){
//           if(prethodna === null || sadasnja > prethodna){
//               console.log("Prethodna:",prethodna)
//               console.log("Sadasnja:",sadasnja)

//               return sadasnja;

        

//           return prethodna;

//       },null);
//       console.log(`Najveca vrednost u nizu je ${Max}`);
//        1.

//   Primer za Mi nimalnu vrednost

//      const Min = niz.reduce(
//           function maksVrednost(prethodna,sadasnja){
//               if(prethodna === null || sadasnja < prethodna){
//                   return sadasnja;
//               }
//               return prethodna;

//           },null);
//           console.log(`Najmanja vrednost u nizu je ${Min}`);

// *** Primer za pocetnu vrednost
// 3.Spajanje clanova niza koji samo po sebi jesu niz u obicne clanove.

// const nizSaNizovima = [1,2,[3,4,5],[6,7],8,[9,10]];

// const nizBezNizova = nizSaNizovima.reduce(
//     function odgradjivanje(prethodna,sadasnja,index,array){
//     return prethodna.concat(sadasnja);
//       []+1
//      [1]+2
//      [1,2].concat([3,4,5]) -> [1,2,3,4,5]
//       [1,2,3,4,5].concat([6,7]) -> [1,2,3,4,5,6,7]

// },[])
// console.log(nizSaNizovima);
// console.log(`Niz nakon reduce metode`,nizBezNizova);

// //Suma clanova u nizu sa reduce metodom
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// sum = arr.reduce(function (a, b) {
//   return a + b;
// }, 0);
// console.log(sum);
// // max value u nizu
// max = arr.reduce(function (prev, curr) {
//   if (prev === null || prev < curr) {
//     return curr;
//   }
//   return prev;
// }, null);
// console.log(max);
// // min value u nizu
// min = arr.reduce(function (prev, curr) {
//   if (prev === null || prev > curr) {
//     return curr;
//   }
//   return prev;
// }, null);
// console.log(min);
// srednjaVrednost = arr.reduce (function (prev, curr) {
// return prev + curr / arr.length;
// },0);
// console.log("niz",arr,"duzina niza",arr.length,"suma niza",sum)
// console.log(srednjaVrednost);
// */

// // for (let el = 0; el < niz.length; el++){
// // niz[el] = niz[el] * niz[el];
// // }
// // let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20,
// //     30, 35, 40, 45, 50, 52, 54, 56, 58, 60, 61, 63,
// //     65, 67, 69, 70, 75, 80, 82, 84, 86, 88, 90, 91, 93, 95, 97, 99, 100];
// // let names = ["Wick", "Luffy", "Sparrow", "Morgan", "James",
// //     "Future", "Akon", "Travis", "Drake", "Hamdo", "Edo", "Alen", "Osman",
// //     "Dzenis", "Ahmed"];
    
// // let nizz = niz.map(el => el * el);
// // let nizMapSuma = niz.map(el => el + el);
// // let nizNeparni = niz.filter(i => i % 2 !== 0);
// // let nizParni = niz.filter(i => i % 2 === 0);
// // let nizSqrt = nizParni.map(s => Math.sqrt(s));
// // let nizSqrtN = nizNeparni.map(s => Math.sqrt(s));
// // let namesS = names.filter(imena => imena.charAt(0) !== "A");

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// //     30, 35, 40, 45, 50, 52, 54, 56, 58, 60, 61, 63,
// //     65, 67, 69, 70, 75, 80, 82, 84, 86, 88, 90, 91, 93, 95, 97, 99, 100];
// // let arrSum = arr.reduce((a, b) => (a+b), 0);
// // let arrDiv = arr.reduce((a, b) => a + b / arr.length, 0) ;
// // let arrMax = arr.reduce((a, b) => { if (a === 0 || a < b) return b; }, 0);
// // let arrMin = arr.reduce((a, b) => { if (a === 0 || a > b) return b; else return a; }, 0);
// // const nizSaNizovima = [1, 2, [3, 4, 5], [6, 7], 8, [9, 10]];
// // let nizBezNiza = nizSaNizovima.reduce((a, b) => a.concat(b),[]);

// // console.log("Prvi niz", niz, "Niz imena", names, "Drugi niz", arr);
// // console.log("Proizvod map niza", nizz, "Suma map niza", nizMapSuma);
// // console.log("Filter neparnih brojeva", nizNeparni, "Filter parnih brojeva", nizParni);
// // console.log("Koren parnih", nizSqrt, "Koren neparnih", nizSqrtN);
// // console.log("Reduce suma niza", arrSum);
// // console.log("Srednja vrednost niza", arrDiv);
// // console.log("Max vrednost niza", arrMax);
// // console.log("Min vrednost niza", arrMin);
// // console.log("Filter imena ", namesS);
// // console.log(nizSaNizovima);
// // console.log(nizBezNiza);
// // const nam = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey",
// //     "Double Bogey", "Go Home!"];

// // function golfScore(par, strokes) {
// // if(strokes == 1){
// //   return nam[0];
// // }
// // else if (strokes <= par - 2){
// //   return nam[1];
// // }
// // else if (strokes == par - 1){
// //   return nam[2];
// // }
// // else if (strokes == par){
// //   return nam[3];
// // }
// // else if (strokes == par + 1){
// //   return nam[4];
// // }
// // else if (strokes == par + 2){
// //   return nam[5];
// // }
// // else if (strokes >= par + 3){
// //   return nam[6];
// // }
// // else
// //  { return "Change Me";}
// // };

// // console.log(golfScore(5, 7));
// // function caseInSwitch(val) {
// //     let answer = "";

// //     switch (val) {
// //         case 1:
// //            return "alpha";
// //             break;
// //         case 2:
// //            return "beta";
// //             break;
// //         case 3:
// //            return "gamma";
// //             break;
// //         case 4:
// //            return "delta";
// //             break;
// //         case 5:
// //             return "AHMED TOP G ULTRA SIGMA"
// //     }
// //     return answer;
// // }
// // console.log(caseInSwitch(5));
// // const person = {
// //     name: "Jovan",
// //     lastName: "Jovanovic",
// //     age: 85,
// //     wifes: ["one", "two", "...."],
// //     address: {
// //         country: "emirates",
// //         city: "pazar",
// //         street: "prvomajsku",
// //         number: 31,
// //     },
// //     occupation: "kupio nis"
// // };
// // console.log("nasa osoba se bavi", person.occupation);
// // console.log("knfjdnfj", person["lastName"]);
// // console.log("nasa osoba zivi u", person["address"]["street"]);
// // person.height = 190;
// // const person2 = person;
// // person2.name = "abdu";
// // console.log(person2, person)
// // nizzz = [1, 2, 3, 4,];
// // nizzzzz = nizzz;
// // nizzzzz.push("string");
// // console.log(nizzzzz)
// // const covek = {
// //     ...person,
// //     weight: 90,


// // ... je kopija menja push unshift pop itd
// // domaci niz koji sadrzi 10 studenata svaki studenat je obj koji sadrzi ime prezime niz predmeta i niz ocena smer
// //broj predmeta = broj ocena
// //da se prodje kroz studente da se pronadje prosecna ocena i da se sacuva
// //novi niz vece ocena za 8 samo ucenici
// var studenti = [
//     prviStudent = {
//         name: "Ronald",
//         lastName: "MekDonald",
//         nickName:"Mac",
//         predmeti: ["Matematika", "Fizika", "Otpornost materijala", "Mehanika",
//             "Termodinamika", "Robotika", "Masinski materijali"],
//         ocene: [8, 9, 7, 6, 7, 10, 10],
//         departman: "Paddies Pub",
        

//     },
//     drugiStudent = {
//         name: "Tony",
//         lastName: "Soprano",
//         predmeti: ["Strategija", "Relacije", "Biznis", "Psihologija", "Ljudsko ponasanje"],
//         ocene: [9, 9, 10, 10, 6],
//         departman: "Waste management",

//     },
//     treciStudent = {
//         name: "Christopher",
//         lastName: "Moltisanti",
//         predmeti: ["Odvikavanje", "H", "Prodavanje tudje imovine", "Karizma",
//             "Lojalnost", "Manipulisanje berzom","Rad sa oruzjem"],
//         ocene: [6, 8, 10, 10, 10, 10, 10],
//         departman: "Waste management",
        
//     },
//     cetvrtiStudent = {
//         name: "Paulie",
//         lastName: "Gualtieri",
//         nickName: "Walnuts",
//         predmeti:["Moving H", "Prodavanje tudje imovine", "Karizma",
//             "Lojalnost", "Manipulisanje berzom", "Rad sa oruzjem", "Slikarstvo", "Komedija"],
//         ocene: [8, 10, 8.5, 7, 6, 10, 10, 10],
//         departman: "Waste management",
//     },
//     petiStudent = {
//         name: "Johnny",
//         lastName: "Sacramoni",
//         nickName: "Sack",
//         predmeti:["Urbanizam", "Prodavanje tudje imovine", "Karizma",
//             "Lojalnost", "Manipulisanje berzom", "Rad sa oruzjem", "Familijarne veze", "Drip"],
//         ocene: [10, 6, 9, 9, 6, 10, 10, 10],
//         departman: "Waste management",
        
        
//     },
//     sestiStudent = {
//         name: "Raymond",
//         lastName: "Reddington",
//         nickName: "Red",
//         predmeti: ["Marinstvo", "Internacionalna trgovina", "Knjizevnost", "Zakonovodstvo",
//             "Ekonomija", "Jezici", "Gurmanstvo", "Crna Lista"],
//         ocene: [9, 10, 10, 10, 10, 10, 10, 10],
//         departman:"Konsijerz kriminala",
//     },
//     sedmiStudent = {
//         name: "Frenk",
//         lastName: "Rejnolds",
//         nickName: "I gotta a guy",
//         predmeti: ["Vijetnam", "Radionice", "CEO", "Rvanje", "Porez", "Finanser", "Mesarstvo"],
//         ocene: [10, 8, 8, 10, 6, 10, 6],
//         departman:"Paddys Pub",
//     },
//     osmiStudent = {
//         name: "Denis",
//         lastName: "Rejnolds",
//         nickName: "Golden",
//         predmeti: ["Konobar", "Model", "Vezivanje", "Interijer","Govornik","Psiholog"],
//         ocene: [6,7,10,6,10,10],
//         departman:"D.E.N.N.I.S System, Paddies Pub",
//     },
//     devetiStudent = {
//         name:"Dee",
//         lastName:"Rejnolds",
//         nickName:"Sweet Dee or Bird",
//         predmeti: ["Konobar","Model","Gluma","Akcentovanje","Komedija","Improvizacija"],
//         ocene: [6,8,10,10,10,10],
//         departman:"Paddies Pub",
//     },
//     desetiStudent = {
//         name:"Carli",
//         lastName:"Keli",
//         nickName:"",
//         predmeti: ["Bird law", "Carli work", "Vodoinstalter", "Genije"
//             , "Inspekcija kanalizacije i mostova", "Teorija evolucija"],
//         ocene: [10,6,6,10,10,6],
//         departman:"Paddies Pub",
    
//     }

// ];
// let srednjaVrednost = [
//     ocena1 = { "Srednja ocena": studenti[0].ocene.reduce((a, b) => a + b, 0) / studenti[0].ocene.length },
//     ocena2 = { "Srednja ocena": studenti[1].ocene.reduce((a, b) => a + b, 0) / studenti[1].ocene.length },
//     ocena3 = { "Srednja ocena": studenti[2].ocene.reduce((a, b) => a + b, 0) / studenti[2].ocene.length },
//     ocena4 = { "Srednja ocena": studenti[3].ocene.reduce((a, b) => a + b, 0) / studenti[3].ocene.length },
//     ocena5 = { "Srednja ocena": studenti[4].ocene.reduce((a, b) => a + b, 0) / studenti[4].ocene.length },
//     ocena6 = { "Srednja ocena": studenti[5].ocene.reduce((a, b) => a + b, 0) / studenti[5].ocene.length },
//     ocena7 = { "Srednja ocena": studenti[6].ocene.reduce((a, b) => a + b, 0) / studenti[6].ocene.length },
//     ocena8 = { "Srednja ocena": studenti[7].ocene.reduce((a, b) => a + b, 0) / studenti[7].ocene.length },
//     ocena9 = { "Srednja ocena": studenti[8].ocene.reduce((a, b) => a + b, 0) / studenti[8].ocene.length },
//     ocena10 = { "Srednja ocena": studenti[9].ocene.reduce((a, b) => a + b, 0) / studenti[9].ocene.length },
// ];

// // console.log(srednjaVrednost)
// // prviStudent = { ...prviStudent, ...ocena1 };
// // drugiStudent = { ...drugiStudent, ...ocena2 };
// // treciStudent = { ...treciStudent, ...ocena3 };
// // cetvrtiStudent = { ...cetvrtiStudent, ...ocena4 };
// // petiStudent = { ...petiStudent, ...ocena5 };
// // sestiStudent = {...sestiStudent, ...ocena6 };
// // sedmiStudent = { ...sedmiStudent, ...ocena7 };
// // osmiStudent = { ...osmiStudent, ...ocena8 };
// // devetiStudent = { ...devetiStudent, ...ocena9 };
// // desetiStudent = { ...desetiStudent, ...ocena10 };
// // console.log(prviStudent, drugiStudent, treciStudent, cetvrtiStudent, petiStudent,
// //     sestiStudent, sedmiStudent, osmiStudent, devetiStudent, desetiStudent);
// let prosecneOcene = studenti.map((student) => ({
//     prosecnaOcena:
//       student.ocene.reduce((a, b) => a + b, 0) / student.ocene.length,
//     ...student,
//   }));
//   const topStudent = studenti
//     .map((student) => ({
//       prosecnaOcena:
//         student.ocene.reduce((a, b) => a + b, 0) / student.ocene.length,
//       ...student,
//     }))
//     .filter((a, b) => a.prosecnaOcena >= 8.5);

const  person={
    name: "john",
    last: "doe",
    getFullName: function(){
        `${this.name} ${this.last}`;
    },

}
// sami svoj objekat ,, funkcija da nam vrati nas nadimal
const test = {
    prop: 42,
    name: "Osman",
    prezime:"Pulic",
    func: function () {
        return this.name.slice(0, 2) + this.prezime.slice(0, 2);
    },
    nick: function () {
        return this.name.charAt(0) + this.name.charAt(1) + this.prezime.charAt(0)
            + this.prezime.charAt(1);
    }
}
console.log(test.func());
console.log(test.nick());