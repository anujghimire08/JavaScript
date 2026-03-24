class person {
  constructor(nam, umer) {
    this.nam = nam;
    this.umer = umer;
  }
  display() {
    console.log(`NAME:${this.nam} , AGE:${this.umer}`);
  }
}

let p = new person("ag", 12);
p.display();
