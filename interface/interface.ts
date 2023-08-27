interface Product {
  id: number;
  name: string;
  unitPrice: number;
}

class Product2 {
  id: number;
  name: string;
  unitPrice: number;
}

function save(product: Product) {
  console.log(product.name, "saved");
}

function save2(product2: Product2) {
  console.log(product2.name, "saved");
}

save({ id: 1, name: "phone", unitPrice: 123 });

let mouse = new Product2();
mouse.id = 1;
save2(mouse);

interface PersonService {
  id: number;
  name: string;
  unitPrice: number;
  save();
}

class CustomerService implements PersonService {
  save() { 
    console.log("first"); 
  }
}
