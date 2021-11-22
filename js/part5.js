// var myObject = {
//     a: 2
// }
// console.log(myObject.a); //2

// 如果a不在myObject中，就需要使用对象的[[Prototype]]链了
// 对于默认的[[GET]]操作来说，如果无法在对象本身找到需要的属性，就会继续访问对象的[[Prototype]]链；
// var anotherObject = {
//     a: 2
// }
// var myObject = Object.create(anotherObject);

// console.log(myObject.a);    //2

// var anotherObject = {
//     a: 2
// }
// var myObject = Object.create(anotherObject);

// for(var k in myObject){
//     console.log('found: ' + k); //found: a
// }

// 所有普通的[[Prototype]]链最终都会指向内置的Object.prototype

// var anotherObject = {
//     a: 2
// }
// var myObject = Object.create(anotherObject);

// console.log(anotherObject.a);   //2
// console.log(myObject.a);    //2

// console.log(anotherObject.hasOwnProperty('a')); //true
// console.log(myObject.hasOwnProperty('a'));  //false

// myObject.a++;

// console.log(anotherObject.a);   //2
// console.log(myObject.a);    //3

// console.log(myObject.hasOwnProperty('a'));  //true

// function Foo(){

// }

// var a = new Foo();
// console.log(Object.getPrototypeOf(a) === Foo.prototype);    //true

// function Foo(){

// }

// console.log(Foo.prototype.constructor === Foo); //true

// var a = new Foo();
// console.log(a.constructor === Foo); //true

// function NothingSpecial(){
//     console.log("Dont't mind me!");
// }

// var a = new NothingSpecial();

// a;  //Dont't mind me!

// function Foo(name){
//     this.name = name;
// }
// Foo.prototype.myName = function(){
//     return this.name;
// }

// var a = new Foo('a');
// var b = new Foo('b');

// console.log(a.name);    //a
// console.log(b.name);    //b

// function Foo(){
// }
// Foo.prototype = {};

// var a1 = new Foo();
// console.log(a1.constructor === Foo);    //false
// console.log(a1.constructor === Object); //true

// [[prototype]]机制就是存在于对象中的一个内部链接，它会饮用其他对象；
// 通常来说，这个链接的作用是：如果在对象上没有找到需要的属性或者方法的引用，引擎就会继续在[[prototype]]关联的对象上进行查找，同理，如果在后者中也没有找到需要的引用就会继续查找它的[[prototype]]，以此类推。这一系列的链接被称为“原型链”。

// var foo = {
//     something: function(){
//         console.log('Tell me something good ...');
//     }
// }

// var bar = Object.create(foo);
// bar.something();    //Tell me something good ...

// Object.create的polyfill代码：
// if(!Object.create){
//     Object.create = function(o){
//         function F(){}
//         F.prototype = o;
//         return new F();
//     }
// }

var anotherObject = {
    a: 2
}
var myObject = Object.create(anotherObject, {
    b: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: 3
    },
    c: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: 4
    }
})

console.log(myObject.hasOwnProperty('a'));  //false
console.log(myObject.hasOwnProperty('b'));  //true
console.log(myObject.hasOwnProperty('c'));  //true

console.log(myObject.a);    //2
console.log(myObject.b);    //3
console.log(myObject.c);    //4



