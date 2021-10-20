// 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数时当前词法作用域之外执行。

// 并不是闭包，虽然记住了词法作用域，但是并没有在词法作用域之外执行
// function foo(){
//     var a = 2;

//     function bar(){
//         console.log(a);
//     }

//     bar();
// }
// foo();

// 真正的闭包
// 第一种：函数作为返回值
// function foo(){
//     var a = 2;

//     function bar(){
//         console.log(a);
//     }

//     return bar;
// }

// var baz = foo();
// baz();

// bar()在自己定义的词法作用域以外的地方执行

// 第二：函数作为参数传递
// function foo(){
//     var a = 2;

//     function baz(){
//         console.log(a);
//     }

//     bar(baz);
// }

// function bar(fn){
//     fn();
// }

// foo();

// function wait(message){
//     setTimeout(function timer(){
//         console.log(message);
//     }, 1000);
// }

// wait('Hello closure!');

// 循环和闭包
// for(var i = 1; i <= 5; i++){
//     setTimeout(function timer(){
//         console.log(i);
//     }, i * 1000);
// }
// 预期1～5，每秒一次，每次一个
// 实际每秒一次输出五次6

// 立即执行函数
// for(var i = 1; i <= 5; i++){
//     (function(){
//         setTimeout(function timer(){
//             console.log(i);
//         }, i * 1000)
//     })();
// }
// 还是五次6

// for(var i = 1; i <= 5; i++){
//     (function(){
//         var j = i;
//         setTimeout(function timer(){
//             console.log(j);
//         }, j * 1000)
//     })();
// }
// 终于，正常工作了

// 改进版
// for(var i = 1; i <= 5; i++){
//     (function(j){
//         setTimeout(function timer(){
//             console.log(j);
//         }, j * 1000)
//     })(i);
// }

// for(let i = 1; i <= 5; i++){
//     setTimeout(function timer(){
//         console.log(i);
//     }, i * 1000);
// }

// 模块
// function foo(){
//     var something = 'cool';
//     var another = [1, 2, 3];

//     function doSomething(){
//         console.log(something);
//     }

//     function doAnother(){
//         console.log(another.join(' ! '));
//     }
// }
// 上面并不是闭包，因为他们的词法作用域也就是foo()内部的作用域

// function CoolModule(){
//     var something = 'cool';
//     var another = [1, 2, 3];

//     function doSomething(){
//         console.log(something);
//     }

//     function doAnother(){
//         console.log(another.join(' ! '));
//     }

//     return {
//         doSomething: doSomething,
//         doAnother: doAnother
//     }
// }

// var foo = CoolModule();

// foo.doSomething();  //cool
// foo.doAnother();    //1 ! 2 ! 3

// 普通函数模式
// function CoolModule(id){
//     function identify(){
//         console.log(id);
//     }

//     return {
//         identify: identify
//     }
// }

// var foo1 = CoolModule('foo 1');
// var foo2 = CoolModule('foo 2');

// foo1.identify();    //foo 1
// foo2.identify();    //foo 2

// 命名将要作为API返回的对象
// var foo = (function(id){
//     function change(){
//         publicAPI.identify = identify2;
//     }

//     function identify1(){
//         console.log(id);
//     }

//     function identify2(){
//         console.log(id.toUpperCase());
//     }

//     var publicAPI = {
//         change: change,
//         identify: identify1
//     }

//     return publicAPI;
// })('foo module');

// foo.identify(); //foo module
// foo.change();
// foo.identify(); //FOO MODULE

// 现代模块机制
var MyModules = (function Manager(){
    var modules = {};

    function define(name, deps, impl){
        for(var i = 0; i < deps.length; i++){
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name){
        return modules[name];
    }

    return {
        define: define,
        get: get
    }
})();

MyModules.define('bar', [], function(){
    function hello(who){
        return 'Let me introduce: ' + who;
    }

    return {
        hello: hello
    }
})

MyModules.define('foo', ['bar'], function(bar){
    var hungry = 'hippo';

    function awesome(){
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    }
})

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');

console.log(
    bar.hello('hippo')
);

foo.awesome();