// 一、语法

// 对象可以通过两种形势定义：声明（文字）形式和构造形式
// 文字语法
// var myObj = {
//     key: value
// }

// 构造形式
// var myObj = new Object();
// myObj.key = value;


// 二、类型
// Javascript中一共有六种主要类型：
// string
// number
// boolean
// null
// undefined
// object

// 内置对象（名字和简单基础类型一样）
// String
// Number
// Boolean
// Object
// Function
// Array
// Date
// RegExp
// Error

// var strPrimitive = 'I am a string';
// console.log(typeof strPrimitive);   //string
// console.log(strPrimitive instanceof String);    //false

// var strObject = new String('I am a string');
// console.log(typeof strObject);  //object
// console.log(strObject instanceof String);   //true

// var strPrimitive = 'I am a string';
// console.log(strPrimitive.length);   //13
// console.log(strPrimitive.charAt(3));    //m


// 三、内容
// var myObject = {
//     a: 2
// }
// console.log(myObject.a);    //2
// console.log(myObject['a']); //2

// var myArray = ['foo', 42, 'bar'];
// console.log(myArray.length);    //3
// console.log(myArray[0]);    //foo
// console.log(myArray[2]);    //bar

// 属性描述符
// var myObject = {};
// Object.defineProperty(myObject, 'a', {
//     value: 2,
//     writable: true,
//     configurable: true,
//     enumerable: true
// })

// console.log(myObject.a);    //2

'use strict';
var myObject = {};
Object.defineProperty(myObject, 'a', {
    value: 2,
    writable: false,
    configurable: true,
    enumerable: true
})

myObject.a = 3; //TypeError
console.log(myObject.a);    //2
