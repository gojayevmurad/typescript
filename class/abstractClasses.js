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
var CreditBase = /** @class */ (function () {
    function CreditBase() {
    }
    CreditBase.prototype.save = function () {
        console.log("saved");
    };
    return CreditBase;
}());
var ConsumerCredit = /** @class */ (function (_super) {
    __extends(ConsumerCredit, _super);
    function ConsumerCredit() {
        return _super.call(this) || this;
    }
    ConsumerCredit.prototype.calculate = function () {
        console.log("calculated for consumer");
    };
    return ConsumerCredit;
}(CreditBase));
var consumerCredit = new ConsumerCredit();
consumerCredit.save();
consumerCredit.calculate();
