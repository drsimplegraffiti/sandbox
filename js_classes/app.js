// Classes are templates for creating objects
// Method 1: Class function

class Person {
  constructor(name, age, occupation) {
    this.age = age;
    this.name = name;
    this.occupation = occupation;
  }

  todo() {
    console.log("kill");
  }
}

const createPerson = new Person("Abayomi", 78, "dev");
console.log(createPerson.todo());

// Method 2: Class Expression
const doSomething = class HouseChores {
  constructor(cut, clean, arrange) {
    this.cut = cut;
    this.clean = clean;
    this.arrange = arrange;
  }
};

const datInfo = {
  cut: (doSomething.cut = "grass"),
  clean: (doSomething.clean = "cars"),
  arrange: (doSomething.arrange = "house"),
};

console.log(datInfo);

// static types
class Music {
  constructor(viola, trombone) {
    this.viola = viola;
    this.trombone = trombone;
  }

  static musicConstant = "drums";
}

const result = new Music("Eb", "F#");
console.log(result);
console.log(Music.musicConstant); // static types are called without instantiating
