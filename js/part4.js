

// a = 2;
// var a;
// console.log(a); //2

// console.log(a);
// var a = 2;  //undefined

// foo();

// function foo(){
//     console.log(a); //undefined
//     var a = 2;  
// }

// 变量和函数声明会被提升，但是函数表达式不会
// foo();  ////Uncaught TypeError: foo is not a function

// var foo = function(){
//     console.log(a); 
//     var a = 2;  
// }

// 函数会首先被提升，然后才是变量
// foo();

// var foo;

// function foo(){
//     console.log(1);
// }

// foo = function(){
//     console.log(2);
// }
// 打印1 被引擎解析为：
// function foo(){
//     console.log(1);
// }

// foo();

// foo = function(){
//     console.log(2);
// }

foo();

var a = true;
if(a){
    function foo(){
        console.log('a');
    }
}else{
    function foo(){
        console.log('b');
    }
}