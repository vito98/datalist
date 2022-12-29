const moment = require("moment");

class Shop {
  constructor(apple, cola, cake) {
    this.apple = apple;
    this.cola = cola;
    this.cake = cake;
  }

  qoldiq() {
    console.log(
      `Hozir ${moment().format("HH:mm")} bizning shopda ${
        this.apple
      } kg olma, ${this.cola} ta cola va ${this.cake} ta tort mavjud `
    );
  }

  sotish(product, amount) {
    if (this.apple >= amount) {
      this.apple -= amount;
      console.log(
        `${product} ${amount} kg sotildi va qolgan olma ${this.apple} ga teng`
      );
    } else if (amount > this.apple) {
      amount -= this.apple;
      console.log(
        `Bugun ${product} juda kop sotik qoshnilardan ${amount} kg qarz olib turdik`
      );
    }
  }

  qabul(product, amount) {
    console.log(
      `Bugun ${moment().format(
        "YYYY MM DD HH:mm"
      )} da ${product} ${amount} karobka kirib keldi`
    );
  }
}

module.exports = Shop;
