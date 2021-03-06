//Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Eistein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//Array.Prototype.filter()
//!.Filter the list of inventors for those who were born in the 1500's

// const fifteen = inventors.filter(function(inventor){
//     if(inventor.year >= 1500 && inventor.year <=1600){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(fifteen);

const fifteen = inventors.filter(inventor =>(inventor.year >= 1500 && inventor.year <= 1600));
//console.table(fifteen);
//Array.prototype.map()
//2.Give us an array of the invebtory first  and last names

//const firstname = inventors.map(inventor  => inventor.first + inventor.last);
const firstname = inventors.map(inventor  => `${inventor.first}  ${inventor.last}`);
//console.log(firstname);

//Arrray.prototype.sort()
//3.Sort the inventors by birthdate oldest to youngest
// const ordered = inventors.sort(function(a,b){
//     if(a.year >= b.year){
//         return true;
//     }else{
//         return false;
//     }
// });
//console.table(ordered);

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered);


//Array.prototype.reduce()
//4.How many years did all the inventors live?

// var totolYear =0;
// for(var i=0;i<inventors.length;i++){
//     totolYear +=inventors[i].year
// }
// console.log(totolYear);

const totolYear = inventors.reduce((total,inventor) =>{
    return total + (inventor.passed - inventor.year);
},0);
console.log(totolYear);


//5.Sort the inventors by years lived

const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1:1
    // if(lastGuy > nextGuy){
    //     return -1;
    // }else{
    //     return 1;
    // }
});

console.table(oldest);

//6.Creatte a list of Boulevards in paris that contain 'de' anywere in the name 
//https://en.wikipedia.org/wiki/Category:Boulevards_in_parts

// const category = document.querySelector('mw-category');
// const links =Array.from(category.querySelectorAll('a'));
// const de = links
//     .map(links =>links.textContent)
//     .filter(streeName => streeName.includes('de'));

//7.Sort Exercise
//Sort the people alphabetically by last name

const alpa = people.sort(function(lastOne,nextOne){
    const [aLast,aFirst] = lastOne.split(',');
    const [bLast,bFirst] = nextOne.split(',');
    return aLast > bLast && aFirst > bFirst ? -1:1;
    
});
console.log(alpa);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

 // 8. Reduce Exercise
 // Sum up the instances of each of these
 const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  console.log(transportation);