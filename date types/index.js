function sayHello(name) {
    return "Hello, " + name;
}
var message = sayHello("David");
var num;
num = 10;
num = 10.25;
var city;
// city = 10;// false
city = "Baku";
var isPositive;
// isPositive = 10;//false
// isPositive = 'String' // false
isPositive = false;
isPositive = true;
var numbers = [1, 2, 3, 4, 5];
var numbers2 = [1, 2, 3, 4];
// couple
var arr = [2, "Baku"];
var Colors;
(function (Colors) {
    Colors[Colors["Black"] = 1] = "Black";
    Colors[Colors["White"] = 2] = "White";
    Colors[Colors["Green"] = 3] = "Green";
    Colors[Colors["Red"] = 4] = "Red";
    Colors[Colors["Blue"] = 5] = "Blue";
})(Colors || (Colors = {}));
;
var color = Colors.Black;
console.log(color);
