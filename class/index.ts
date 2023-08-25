class Home {
  private countRooms: number; // access only main comp.
  countWindows: number;
  floor: number;

  constructor(countRooms: number, countWindows: number, floor: number) {
    this.countRooms = countRooms;
    this.countWindows = countWindows;
    this.floor = floor;
  }

  eat() {
    console.log("Eated");
  }
}

let home = new Home(12, 24, 3);

class People {
  protected _name: string;

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  save() {
    console.log("saved");
  }
}

class Customer extends People {
  sale() {
    console.log("saled");
  }
}

class Employee {
  payTax() {
    console.log("payed");
  }
}

let customer = new Customer();

console.log(customer.name);
customer.name = "David";
console.log(customer.name);
