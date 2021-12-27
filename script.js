// Student's Final Grade
// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10){
//         return 100;
//     }else if(exam > 75 && projects >= 5){
//         return 90;
//     }else if(exam > 50 && projects >= 2){
//         return 75;
//     }else{
//         return 0;
//     }
// }

//doubleEveryOther
// let arr = [1,2,3,4]
// function doubleEveryOther(a) {
//     //let b = []
//     for(let i = 0; i < a.length; i++){
//         if(i % 2==0){
//           return console.log(i*2);
//             //return b.push(i * 2)
//         }//else{
//         //     b.push(i);
//         // }
//     }
//     //return b;
// }
// console.log(doubleEveryOther(arr));

//Square(n) Sum
// function squareSum(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i] ** 2;
//     }
//     return sum;
// }
//Is he gonna survive?
// function hero(bullets, dragons){
//     let bulletsNeeded = dragons * 2;
//     if(bullets >= bulletsNeeded){
//         return true;
//     }else{
//         return false;
//     }
// }
//vovel remover
function shortcut(string){
    const vowels = /[aeiou]+/g;
    return string.replace(vowels, "");
}
//DNA to RNA Conversion
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace(/T/g, "U");
}


//Descending Order
function descendingOrder(n){

    var n = n.toString().split('');
    var descendingNumber = Number(n.sort((a, b)=> b-a).join(''));
    return descendingNumber;
}

//Number of Divisions
const divisions = (n, divisor) => {
    return Math.floor(Math.log(n)/Math.log(divisor))
};