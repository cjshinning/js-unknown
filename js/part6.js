// var Task = {
//     setID: function(ID){
//         this.id = ID;
//     },
//     outputID: function(){
//         console.log(this.id);
//     }
// }

// var XYZ = Object.create(Task);

// XYZ.prepareTask = function(ID, Label){
//     this.setID(ID);
//     this.label = Label;
// }

// XYZ.prepareTaskDetails = function(){
//     this.outputID();
//     console.log(this.label);
// }

// function Foo(){}

// var a1 = new Foo();
// console.log(a1.constructor);    //ƒ Foo(){}
// console.log(a1.constructor.name);   //Foo

// var Foo = {};
// var a1 = Object.create(Foo);
// console.log(a1);    //{}
// Object.defineProperty(Foo, 'constructor', {
//     enumerable: false,
//     value: function Gotcha(){}
// })
// console.log(a1);    //Gotcha {}

// function Foo(who){
//     this.me = who;
// }
// Foo.prototype.identify = function(){
//     return 'I am ' + this.me;
// }

// function Bar(who){
//     Foo.call(this, who);
// }
// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.speack = function(){
//     console.log('hello, ' + this.identify() + '.');
// }

// var b1 = new Bar('b1');
// var b2 = new Bar('b2');

// b1.speack();    //hello, I am b1.
// b2.speack();    //hello, I am b2.

// 使用代理：
// var Foo = {
//     init: function(who){
//         this.me = who;
//     },
//     identify: function(){
//         return 'I am ' + this.me;
//     }
// }

// var Bar = Object.create(Foo);

// Bar.speak = function(){
//     console.log('Hello, ' + this.identify() + '.');
// }

// var b1 = Object.create(Bar);
// b1.init('b1');
// var b2 = Object.create(Bar);
// b2.init('b2');

// b1.speak(); //Hello, I am b1.
// b2.speak(); //Hello, I am b2.

// 对象关联风格
Foo = {
    init: function(who){
        this.me = who;
    },
    identify: function(){
        return 'I am ' + this.me;
    }
}
Bar = Object.create(Foo);
Bar.speak = function(){
    console.log('Hello, ' + this.identify() + '.');
}

var b1 = Object.create(Bar);
b1.init('b1');
var b2 = Object.create(Bar);
b2.init('b2');

b1.speak(); //Hello, I am b1.
b2.speak(); //Hello, I am b2.