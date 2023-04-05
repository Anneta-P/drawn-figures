////////////////КВАДРАТ//////////////

const len = 7;

let line = '';

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    line += '*';
  }

  line += '\n';
}

`console.log(line);
