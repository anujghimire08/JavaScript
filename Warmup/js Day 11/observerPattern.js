function Student(name) {
  this.name = name;
}

Student.prototype.update = function (msg) {
  console.log(msg);
};

function HDC() {
  this.students = [];
  console.log(this.students);
}

HDC.prototype.subscribe = function (std) {
  this.students.push(std);
};

HDC.prototype.unsubscribe = function (std) {
  this.students = this.students.filter((st) => st !== std);
  console.log(this.students);
};

HDC.prototype.notify = function (msg) {
  this.students.forEach((std) => std.update(msg));
};
const hdc = new HDC();
const std1 = new Student("Ram");
const std2 = new Student("Sita");
const std3 = new Student("Hari");
const std4 = std2;

hdc.subscribe(std1);
hdc.subscribe(std2);
hdc.subscribe(std3);
hdc.subscribe(std4);

hdc.notify("Exam Routine Published");

hdc.unsubscribe(std4);

hdc.notify("Exam Holiday 5 days...");

class YoutubeChannel {
  constructor() {
    this.subscriber = [];
  }
  joined(user) {
    this.subscriber.push(user);
  }
  leave(user) {
    this.subscriber = this.subscriber.filter((person) => person !== user);
  }
  notification(msg) {
    this.subscriber.forEach((user) => user.update(msg));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  update(msg) {
    console.log(`${this.name} ` + msg);
  }
}

const BroCode = new YoutubeChannel();
const subscriber1 = new User("user1");
const subscriber2 = new User("user2");
const subscriber3 = new User("user3");

BroCode.joined(subscriber1);
BroCode.joined(subscriber2);
BroCode.joined(subscriber3);

BroCode.notification("New Video Out");

BroCode.leave(subscriber1);

BroCode.notification("we are live");
