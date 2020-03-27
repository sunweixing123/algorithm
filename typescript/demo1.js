var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var age = 18;
var na = "sunweixing";
console.log(age);
console.log(na);
function getName(name) {
    return name;
}
var human = getName("sunweixing");
console.log(human);
;
var Children = {
    name: "sunweixing",
    age: 18
};
var Arr1 = [1, 2, 3];
var Animal = /** @class */ (function () {
    function Animal(type, num, weight) {
        this.type = type;
        this.num = num;
        this.weight = weight;
    }
    Animal.prototype.eat = function () {
        console.log("吃东西");
    };
    Animal.prototype.getWeight = function () {
        console.log(this.weight);
    };
    return Animal;
}());
console.log();
var cat = new Animal("猫科", 20, 33);
console.log(cat);
console.log(cat.type);
// console.log(cat.num);
// console.log(cat.weight);
cat.eat();
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(skill) {
        var _this = _super.call(this, "犬科", 17, 66) || this;
        _this.skill = skill;
        return _this;
    }
    Dog.prototype.say = function () {
        console.log("wangwang");
    };
    Dog.prototype.getNum = function () {
        console.log(this.num);
    };
    return Dog;
}(Animal));
var dog = new Dog("看家");
dog.say();
console.log(dog.skill);
console.log(dog.type);
dog.getNum();
