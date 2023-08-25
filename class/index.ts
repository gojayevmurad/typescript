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

let home = new Home(12, 24, 3);