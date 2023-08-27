//#region variant 1
/*
    function getValue(x: number): number {
    return x;
    }

    function getValue2(x: string): string {
    return x;
    }

    let value = getValue(10);

    console.log(value);

    let city = getValue2("Baku");

    console.log(city);
*/
//#endregion

function getValue<T>(x: T): T {
  return x;
}

let num = getValue<number>(2);
console.log(num);

let city3 = getValue<string>("s");
console.log(city3);

class GenericClass<T> {
  data: T;
  getData(param: T): T {
    return param;
  }
}

let newClass = new GenericClass<number>();
