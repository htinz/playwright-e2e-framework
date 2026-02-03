const base = require("@playwright/test");

exports.customtest = base.test.extend({
  testDataForOrder: {
    username: "htindev@gmail.com",
    password: "Studentpractice#5",
    productName: "Zara Coat 4",
  },
});
