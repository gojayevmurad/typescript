var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.save = function () {
        console.log("saved");
    };
    return People;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log("saled");
    };
    return Customer;
}(People));
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.payTax = function () {
        console.log("payed");
    };
    return Employee;
}());
