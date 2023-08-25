abstract class CreditBase {
  constructor() {}

  save(): void {
    console.log("saved");
  }
  abstract calculate(): void;
}

class ConsumerCredit extends CreditBase {
  constructor() {
    super();
  }

  calculate(): void {
    console.log("calculated for consumer");
  }
}

let consumerCredit = new ConsumerCredit();
consumerCredit.save();
consumerCredit.calculate();