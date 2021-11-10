// function foo(){
//     console.log(this.a);
// }

// var a = 2;

// foo.call(null); //2

function foo(){
    return (a) => {
        console.log(this.a);
    }
}

var obj1 = {
    a: 2
}

var obj2 = {
    a: 3
}

var bar = foo.call(obj1);
bar.call(obj2); //2
// 箭头函数是根据外层（函数或者全局）作用域来决定this

// 总结：
// 1、由new调用？绑定到新创建的对象
// 2、由call或者apply调用？绑定到指定的对象
// 3、由上下文对象调用？绑定到那个上下文对象
// 4、默认：在严格模式下绑定到undefined，否则绑定到全局对象