var age:number = 18;
var na:string = "sunweixing";
console.log(age);
console.log(na);

function getName(name:string):string {
  return name;
}

var human = getName("sunweixing");
console.log(human);

interface Person {
  name:string;
  age:number;
};

var Children:Person = {
  name: "sunweixing",
  age: 18
}

let Arr1:number[] = [1, 2, 3];

class Animal{
  public type:string;
  protected num:number;
  private weight:number;
  public constructor(type:string, num:number, weight:number) {
    this.type = type;
    this.num = num;
    this.weight = weight;
  }
  eat() {
    console.log("吃东西");
  }
  getWeight() {
    console.log(this.weight);
  }
}
console.log()

let cat:Animal = new Animal("猫科", 20, 33);
console.log(cat);
console.log(cat.type);
// console.log(cat.num);
// console.log(cat.weight);
cat.eat();
class Dog extends Animal {
  public skill:string
  public constructor(skill:string) {
    super("犬科", 17, 66);
    this.skill = skill;
  }
  say() {
    console.log("wangwang")
  }
  getNum() {
    console.log(this.num);
  }
}
let dog = new Dog("看家");
dog.say();
console.log(dog.skill);
console.log(dog.type);
dog.getNum();
