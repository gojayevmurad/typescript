var Home = /** @class */ (function () {
    function Home(countRooms, countWindows, floor) {
        this.countRooms = countRooms;
        this.countWindows = countWindows;
        this.floor = floor;
    }
    Home.prototype.eat = function () {
        console.log("Eated");
    };
    return Home;
}());
var home = new Home(12, 24, 3);
