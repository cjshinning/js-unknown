// function foo(){
//     console.log(this.a);
// }
// var a = 2;
// foo();

// 非严格模式下，this的绑定规则取决于调用位置

// function foo(){
//     'use strict';
//     console.log(this.a);
// }
// var a = 2;
// foo();
// 严格模式下，全局对象无法使用默认绑定，this会绑定到undefined

// function foo(){
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }

// obj.foo();  //2
// 调用位置会使用obj上下文来引用函数
// 当函数引用有上下文对象时，隐式绑定贵州会把函数调用中的this绑定到这个上下文对象。

// function foo(){
//     console.log(this.a);
// }

// var obj2 = {
//     a: 42,
//     foo: foo
// }

// var obj1 = {
//     a: 2,
//     obj2: obj2
// }

// obj1.obj2.foo();  //42
// 对象属性引用链重只有最顶层或者说最后一层会影响到调用位置。

// function foo(){
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }

// var bar = obj.foo;

// var a = 'oops, global';

// bar();  //oops, global
// bar不带任何修饰，因此应用了默认绑定

// function foo(){
//     console.log(this.a);
// }

// function doFoo(fn){
//     fn();   //调用位置
// }

// var obj = {
//     a: 2,
//     foo: foo
// }

// var a = 'oops, global';
// doFoo(obj.foo); //oops, global

// function foo(){
//     console.log(this.a);
// }

// var obj = {
//     a: 2
// }

// foo.call(obj);  //2
// 使用call,apply显式绑定


// function foo(){
//     console.log(this.a);
// }

// var obj = {
//     a: 2
// }

// var bar = function(){
//     foo.call(obj);
// }

// bar();
// setTimeout(bar, 100);

// bar.call(window);
// 硬绑定之后，无路如何调用函数bar，它总会手动在obj上调用foo

// function foo(something){
//     console.log(this.a, something);
//     return this.a + something;
// }

// var obj = {
//     a: 2
// }

// var bar = function(){
//     return foo.apply(obj, arguments);
// }

// var b = bar(3);
// console.log(b);
// 2 3
// 5

// js的new运算做了什么？
// 1、创建一个全新的对象
// 2、这个对象会被执行[[原型]]连接
// 3、这个对象会绑定到函数调用的this
// 4、如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象

function foo(a){
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a); //2