// function destroyer(arr){
//     let newarr =  Object.values(arguments).slice(1);
//     let ans = [];
//     for(let i = 0; i < arr.length; i++){
//         let flag = false;
//         for(let j = 0; j <newarr.length; j++){
//             if(arr[i] === newarr[j]){
//                 flag = true;
//             }
//         }
//         if(!flag){
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 4));

// function sumFibs(num) {
//   let a = 0;
//   let sum = 0; 
//   for(let i = 1 ; i <= num; ) {
//     if(i % 2 !== 0){
//         sum += i;
//     }
//     i += a;
//     a = i - a;
//   }
//   return sum;
// }
  
// console.log(sumFibs(10));

// function pairElement(str) {
//     let dna = function(char){
//         switch(char){
//             case 'A': return ['A', 'T'];
//             case 'T': return ['T', 'A'];
//             case 'G': return ['G', 'C'];
//             case 'C': return ['C', 'G'];
//         }
//     }
//     let newarr = [];
//     for(let i=0; i<str.length; i++){
//         newarr.push(dna(str[i]));
//     }
//     return newarr;
// }
// console.log(pairElement("GCG"));

// function fearNotLetter(str) {
//     let ans ='';
//     let flag = false;
//   for(let i = 0; i < str.length; i++){
//     if(str.charCodeAt(i) - str.charCodeAt(i-1) > 1){
//         ans = String.fromCharCode(str.charCodeAt(i)-1);
//         flag = true;
//     }
//     else{
//         flag = false;
//     }
//   }
//     return flag ? ans : undefined;
// }
// console.log(fearNotLetter("abcde"));
