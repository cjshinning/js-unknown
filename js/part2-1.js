// 误解一：this指向本身

// function identify(){
//     return this.name.toUpperCase();
// }

// function speak(){
//     var greeting = "Hello, I'm " + identify.call(this);
//     console.log(greeting);
// }

// var me = {
//     name: 'Jenny'
// }

// var you = {
//     name: 'Mike'
// }

// identify.call(me);
// identify.call(you);

// speak.call(me);
// speak.call(you);


// function foo(num){
//     console.log('foo' + num);

//     // 记录foo被调用的次数
//     this.count++;
// }
// foo.count = 0;

// var i;
// for(i = 0;i < 10;i++){
//     if(i > 5){
//         foo(i);
//     }
// }

// console.log(foo.count);

// // foo6
// // foo7
// // foo8
// // foo9
// // 0


// function foo(num){
//     console.log('foo' + num);

//     // 记录foo被调用的次数
//     data.count++;
// }
// var data = {
//     count: 0
// };

// var i;
// for(i = 0;i < 10;i++){
//     if(i > 5){
//         foo(i);
//     }
// }

// console.log(data.count);

// foo6
// foo7
// foo8
// foo9
// 4

// setTimeout(function(){
//     console.log(arguments.callee);
// }, 1000)


// function foo(num){
//     console.log('foo' + num);

//     // 记录foo被调用的次数
//     foo.count++;
// }
// foo.count = 0;

// var i;
// for(i = 0;i < 10;i++){
//     if(i > 5){
//         foo(i);
//     }
// }

// console.log(foo.count);

// // foo6
// // foo7
// // foo8
// // foo9
// // 4

// function foo(num){
//     console.log('foo' + num);

//     // 记录foo被调用的次数
//     this.count++;
// }
// foo.count = 0;

// var i;
// for(i = 0;i < 10;i++){
//     if(i > 5){
//         foo.call(foo, i);
//     }
// }

// console.log(foo.count);

// // foo6
// // foo7
// // foo8
// // foo9
// // 4


// 误解二：this指向函数的作用域
// function foo(){
//     var a = 2;
//     this.bar();
// }

// function bar(){
//     console.log(this.a);
// }

// foo();