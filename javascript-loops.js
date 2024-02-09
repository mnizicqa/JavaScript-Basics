const flag = true;

if (!flag) {
  console.log("condition is satisfied.");
} else {
  console.log("condition is not satisfied.");
}

let i = 1;
while (i > 10) {
  console.log(i);
  i++;
}

do {
  i++;
} while (i > 10);
{
  console.log(i);
}

let required = true;
let k;
for (k = 0; k <= 10; k++) {
  console.log(k);
}

while (required) {
  console.log(required);
  required = false;
}

// check all of the numbers from 1 to 100 which can be divided by 2 and 5

let j;
let n = 0;
console.log("*****************************");
for (j = 1; j <= 100; j++) {
  if (j % 2 == 0 && j % 5 == 0) {
    console.log(j + " can be divided by 2 and 5");
    n++;
    if (n == 3) {
      break;
    }
  }
}
