function sayHello(name: string) {
  return "Hello, " + name;
}

let message = sayHello("David");

let num: number;
num = 10;
num = 10.25;

let city: string;

// city = 10;// false
city = "Baku";

let isPositive: boolean;

// isPositive = 10;//false
// isPositive = 'String' // false
isPositive = false;
isPositive = true;

let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4];
// couple
let arr:[number, string] = [2, "Baku"];

enum Colors{Black=1, White, Green, Red, Blue};

let color : Colors = Colors.Black; 


let value:any = "Baku";
value = 12;
value = true;

let value2:void = undefined;

let age:number;
age = 100;
