///////////////   КВАДРАТ   //////////////

// const len = 7;
// let line = '';

// for (let i = 0; i < len; i++) {
//   for (let j = 0; j < len; j++) {
//     line += '*';
//   }

//   line += '\n';
// }
// console.log(line);



/////////////////СТРІЛКА ВНИЗ  /////////


// let i = 0,
//   j = 0;
// const len = 7;
// let space = "",
//   star = "";

// for (i = 3; i >= 0; i--) {
//   space = "";
//   star = "";
//   for (j = 0; j < len - i; j++) space += " ";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
// }


/////////////////  СТРІЛКА ВГОРУ /////////

// let i = 0,
//   j = 0;
// const len = 7;
// var space = "",
//   star = "";

// while (i < 4) {
//   space = "";
//   star = "";
//   for (j = 0; j < len - i; j++) space += " ";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
//   i++;
// }


/////////////СТРІЛКА ВЛІВО --------- ///////////////

const len = 7;
const mid = Math.floor(len / 2);

for (let i = 1; i <= len; i++) {
  let stars = '';

  if (i <= mid) {
    stars = ' '.repeat(mid - i) + '*'.repeat(i);
  } else {
    stars = ' '.repeat(i - mid - 1) + '*'.repeat(len - i + 1);
  }

  console.log(stars);
}





/////////////////СТРІЛКА ВПРАВО ///////////////////
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

