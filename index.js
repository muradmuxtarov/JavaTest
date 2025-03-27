// NOTE: Task 1

// let arr = ['Murad', 'men', 'Ali', 'Necesen', '?']

// let a = ' ';
// for (let i = 0; i < arr.length; i++) {
//     a += arr[i] + a;
// }
// console.log(a)


// NOTE: Task 2


// let arr =[1, 2, 4, 6, 12, 8, 3, 5];

// let a = 0;
// let b = 0;

// for (let i = 0 ; i < arr.length; ++i){
//     if (arr[i] % 2 == 1){
//         a = a + arr[i];
//     }
//     else if(arr[i] % 2 == 0){
//         b = b + arr[i]
//     }

// }
// console.log(b + a)



// let arr = [2, 3, 5, 19, 6];

// let max = 0;
// for (let i = 0; i < arr.length; ++i) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// NOTE: task 3

// let arr = [2, 3, 5, 19, 6, 46, 24];

// let max = 0;
// let maxCut = 0;
// for (let i = 0; i < arr.length; ++i) {
//     if (max < arr[i] && arr[i] % 2 == 1) {
//         max = arr[i];
//     }
//     else if (maxCut < arr[i] && arr[i] % 2 == 0) {
//         maxCut = arr[i];
//     }
// }
// console.log(maxCut - max)

// NOTE: Task 5

// let arr = [12, 21, 102, 9, 49, 102, 102];

// let max = arr[0];
// let count = 0;

//  for (let i = 0; i <arr.length; ++i){
//     if(arr[i] > max){
//         max = arr[i];
//         count = 1;
//     }else if (arr[i] ===max){
//         count++;
//     }
//  }
//  console.log('en boyuk reqem:', max)
//  console.log('tekrarlanir', count, 'defe')

//  NOTE: Task 6

// let arr = [5, 4];
// let arr2 = [12, 46];

// let sum1 = 0;
// let sum2 = 0;

// for( let i = 0; i < arr.length; ++i){
//     sum1+= arr[i]
// }
// for ( let i = 0; i < arr.length; ++i){
//     sum2+= arr2[i]
// }
// console.log(sum1)
// console.log(sum2)
// console.log(sum1+sum2)

// NOTE: Task 7


// let arr = ['Salam', true, true, false,45,false, 'Sagol']
// for (let i = 0; i < arr.length; ++i){
//     if (typeof arr[i] === 'boolean'){
//         console.log(arr[i])
//     }
// }

// NOTE: Task 8

// let arr = ['Salam', true, true, false, 45, false, 'Sagol']
// for (let i = 0; i < arr.length; ++i)
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i])
//     }

// NOTE: Task 9

// let arr = [
//     {
//         ad: 'ali',
//         age: 20,
//     },
//     {
//         ad: 'Samir',
//         age: 30,
//     },
//     {
//         ad: 'Tural',
//         age: 32,
//     }, {
//         ad: 'Ferid',
//         age: 33,
//     }
// ]
// let person = arr[0];
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i].age > person.age) {
//         person = arr[i];
//     }
// }
// console.log(person.ad)

// NOTE:Task 10

// let numbers = [];

// for (let i = 0; i < 5; ++i) {
//     let num = parseInt(prompt('Eded daxil edin '));
//     numbers.push(num)
// }
// let max = numbers[0];
// for (let i = 1; i < numbers.length; ++i) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }
// }
// console.log(max)

// NOTE: Task 11

// let arr1 = [5, 12, 3, 24, 6];
// let arr2 = [34, 56, 78, 90];

// let result1 = 'he';
// for (let i = 1; i < arr1.length; ++i) {
//     if (arr1[i] < arr1[i - 1]) {
//         result1 = 'yox'
//     }
// }
// console.log(result1)

// let result2 = 'he';
// for (let i = 1; i < arr2.length; ++i) {
//     if (arr2[i] < arr2[i - 1]) {
//         result2 = 'yox'
//     }
// }
// console.log(result2)

// NOTE: Task 12

// let today = new Date ();

// let days0fWeek = ['Bazar', 'Bazar ertesi','Cerwenbe axwami','Cerwenbe','Cume axwami','Cume', 'Wenbe'];

// let weekDay = days0fWeek[today.getDay()];

// console.log('Bugun', weekDay)

// let arr = [10, 13, 45, 2, 4];
// let arr1 = arr.map(num => (num % 2 ===0 ? num + 1 : num));
//  console.log(arr1)
// let names = ['Ali', 'Cavid', 'Nofal', 'Fuad', 'Mehemmed'];
// let longestName = names[0];
// for (let i = 1;i < names.length;++i){
//     if(names[i].length > longestName.length){
//         longestName = names[i];
//     }

// }
// console.log(longestName)
