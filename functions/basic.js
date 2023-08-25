function sum(x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
}
var sum2 = function (x, y) {
    if (y) {
        return x + y;
    }
    return x;
};
console.log(sum(1, 2));
console.log(sum2(1, 2));
console.log(sum(1));
// rest
function sendInvite(firstGuest) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return firstGuest + " " + others.join(" ");
}
console.log(sendInvite("David", "Luis", "Angelina:)"));
