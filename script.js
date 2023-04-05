////////////////КВАДРАТ//////////////

// const len = 7;

// let line = '';

// for (let i = 0; i < len; i++) {
//   for (let j = 0; j < len; j++) {
//     line += '*';
//   }

//   line += '\n';
// }

// console.log(line);

/////////////////СТРІЛКА ВНИЗ/////////

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

/////////////////СТРІЛКА ВГОРУ/////////
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

/////////////////СТРІЛКА ВЛІВО///////////////////
// const len = 7;
// let line = '';
// for (let i = 1; i <= len; i++) {
//   for (let j = 0; j < len - i; j++) {
//     line += ' ';
//   }
//   for (let k = 0; k < i; k++) {
//     line += '*';
//   }
//   line += '\n';
// }
// for (let i = 1; i <= len - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     line += ' ';
//   }
//   for (let k = 0; k < len - i; k++) {
//     line += '*';
//   }
//   line += '\n';
// }
// console.log(line);

/////////////////СТРІЛКА ВПРАВО///////////////////
const len = 7;
let line = '';
for (let i = 1; i <= len; i++) {
  for (let j = 0; j < i; j++) {
    line += '*';
  }
  line += '\n';
}
for (let i = 1; i <= len - 1; i++) {
  for (let j = 0; j < len - i; j++) {
    line += '*';
  }
  line += '\n';
}
console.log(line);
