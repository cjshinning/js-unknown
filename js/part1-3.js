// 一、函数作用域

// function foo(a){
//     var b = 2;

//     // 一些代码
//     function bar(){
//         // ...
//     }

//     var c = 3;
// }

// // bar();  //bar is not defined
// console.log(a, b, c);   //Uncaught ReferenceError: a is not define


// function doSomething(a){
//     b = a + doSomethingElse(a*2);
//     console.log(b*3);
// }

// function doSomethingElse(a){
//     return a - 1;
// }

// var b;

// doSomething(2); //15

// 改造：b和doSomethingElse应该是doSomething内部实现的私有内容。
// function doSomething(a){
//     function doSomethingElse(a){
//         return a - 1;
//     }
//     var b;
//     b =  a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }
// doSomething(2); //15

// 立即执行函数（Immediately Invoked Function Express）
// var a = 2;

// (function IIFE(){
//     var a = 3;
//     console.log(a); //3
// })();

// console.log(a); //2

// 传递参数
// var a = 2;

// (function IIFE(global){
//     var a = 3;
//     console.log(a); //3
//     console.log(global.a); //2
// })(window);

// console.log(a); //2

// 二、块作用域
// for(var i = 0;i < 10;i++){
//     console.log(i);
// }
// console.log(i); //10

// try{
//     undefined();
// }catch(err){
//     console.log(err);   //TypeError: undefined is not a function
// }

// console.log(err);   //报错 ReferenceError: err is not defined

// var foo = true;

// if(foo){
//     var bar = foo * 2;
//     // bar = somthing(bar);
//     console.log(bar);   //2
// }

// console.log(bar);    //2

// var foo = true;

// if(foo){
//     let bar = foo * 2;
//     // bar = somthing(bar);
//     console.log(bar);   //2
// }

// console.log(bar);    //Uncaught ReferenceError: bar is not defined

// {
//     console.log(bar);   //Uncaught ReferenceError: Cannot access 'bar' before initialization
//     let bar = 2;
// }

{
    console.log(bar);   //undefined
    var bar = 2;
}
