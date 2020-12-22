class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}
class Alert {
  constructor(message) {
    this.message = message;
  }
}
module.exports.Employee = Employee;
module.exports.Alert = Alert;
