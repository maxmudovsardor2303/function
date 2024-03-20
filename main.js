// // 1-masala
// const findPrimeargumant =(argument)=>{
//     conut = 0
//     for( let i = 1; i <= argument; i++){
//         if(argument % i == 0){
//             conut++
//         }
//     }
//     if(conut == 2){
//         return "Kiritilgan son tub son"
//     }else{
//         return "Kiritilgan son tub son emas"
//     }
// }
// findPrimeargumant()


// 2-masala

// const findPerfectnumber  = function(number){
//     if(number){
//         let total = 0
//         for(let i = 1; i < number; i++){
//             if(number % i == 0){
//                 total += i
//             }
//         }
//     if(number === total){
//         return `Murakkab son`
//     }else{
//         return `murakkab son emas`
//     }

//     }else{
//         return "Son kiritilmagan"
//     }
// }

// findPerfectnumber(23) 


// 3-masala

// const number_letter = function(letters){
//     let unli = 0
//     let undosh = 0
//     for (let i = 0; i < letters.length; i++) {
//         if (letters[i]==="a" ||letters[i]==="i"|| letters[i]==="e"||letters[i]==="o"||letters[i]==="o'"||letters[i]==="u") {
// unli +=1            
//         }else{
//             undosh +=1
//         }
        
//     }
//     console.log(undosh,unli);
// }
// number_letter("hello")


// 4- masala

// const number_sonlar = function(a,b){
//     let x = Math.abs(5-a)
//     let y = Math.abs(5-b)
//     console.log(Math.min(x,y));
// }
// number_sonlar(-1,-4)


// 5- masala

// const number_total = function(a,b){
//     let x = (a+b)*2
//     let y = (a*b)
//     console.log(x,y);
// }
// number_total(2,5)

// 6- masala

// function get_pow(a,n) {
//     console.log(Math.pow(a,n));
// }
// get_pow(3,2)

// 7-masala

// function sign(a) {
//   if (a>0) {
//     console.log(1);
//   } else if(a<0) {
//     console.log(-1);
//   }else if (a==0){
// console.log(0);
//   }
// }
// sign(7)
