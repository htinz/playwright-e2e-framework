const { DashboardPage } = require("./DashboardPage");
const { LoginPage } = require("./LoginPage");

class POManager {
  constructor(page) {
    this.page = this.page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
  }
  getLoginPage(page) {
    return this.loginPage;
  }
  getDashboardPage() {
    return this.dashboardPage;
  }
}

module.exports = { POManager };
