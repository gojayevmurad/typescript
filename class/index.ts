class Home {
  countRooms: number;
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

class People {
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

// let customer = new Customer()

// customer.save();
// customer.sale();


