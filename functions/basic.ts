function sum(x: number, y: number = 1): number {
  return x + y;
}

let sum2 = function (x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
};

console.log(sum(1, 2));
console.log(sum2(1, 2));
console.log(sum(1));

// rest

function sendInvite(firstGuest: string, ...others: string[]): string {
  return firstGuest + " " + others.join(" ");
}

console.log(sendInvite("David", "Luis", "Angelina:)"));
