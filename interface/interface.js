var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name, "saved");
}
function save2(product2) {
    console.log(product2.name, "saved");
}
save({ id: 1, name: "phone", unitPrice: 123 });
var mouse = new Product2();
mouse.id = 1;
save2(mouse);
