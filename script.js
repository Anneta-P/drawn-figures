///////////////   КВАДРАТ   +++++  //////////////

// const len = 7;
// let line = '';

// for (let i = 0; i < len; i++) {
//   for (let j = 0; j < len; j++) {
//     line += '*';
//   }

//   line += '\n';
// }
// console.log(line);



/////////////////СТРІЛКА ВНИЗ  ------- /////////

// const len = 7;

// const heigh = Math.ceil(len / 2);
// for (let heighIndex = 0; heighIndex < heigh; heighIndex++) {
//   const starts = len - heighIndex * 2;
//   console.log(' '.repeat(heighIndex) + '*'.repeat(starts));
// }

// const len = 7;
// let line = '';

// for (let i = 0; i < len; i++) {
//   for (let j = 0; j < i; j++) {
//     line += ' ';
//   }

//   for (let g = 0; g < 2 * (len - i) - 7; g++) {
//     line += '*';
//   }
//   line += '\n';
// }
// console.log(line);



/////////////////СТРІЛКА ВГОРУ  ---------/////////
// const len = 7;
// let line = '';

// for (let i = 1; i <= len; i++) {
//   for (let j = 1; j <= len - i; j++) {
//     line += ' ';
//   }

//   for (let g = 0; g < 2 * i - 7; g++) {
//     line += '*';
//   }
//   line += '\n';
// }
// console.log(line);

let i = 0,
  j = 0;
// Желаемое количество строк
const len = 7;
var space = "",
  star = "";

while (i < 4) {
  space = "";
  star = "";
  for (j = 0; j < len - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}


/////////////СТРІЛКА ВЛІВО --------- ///////////////

// const len = 7;
// const mid = Math.floor(len / 2);

// for (let i = 1; i <= len; i++) {
//   let spaces = '';
//   let stars = '';

//   if (i <= mid) {
//     spaces = ' '.repeat(mid - i);
//     stars = '*'.repeat(i);
//   } else {
//     spaces = ' '.repeat(i - mid - 1);
//     stars = '*'.repeat(len - i + 1);
//   }

//   console.log(spaces + stars);
// }



/////////////////СТРІЛКА ВПРАВО  +++++++++ ///////////////////
// const len = 7;
// const mid = Math.floor(len / 2);

// for (let i = 1; i <= len; i++) {
//   let stars = '';

//   if (i <= mid) {
//     stars = '*'.repeat(i);
//   } else {
//     stars = '*'.repeat(len - i + 1);
//   }

//   console.log(stars);
// }

