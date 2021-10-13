// part1 作用域是什么
// 1、找出所有的LHS查询和RHS查询
function foo(a){
    var b = a;
    return a + b;
}

var c = foo(2);
// LHS查询（左侧查询）：3处
// c = ..;、a = 2（隐式变量分配）、b = ..

// RHS查询（右侧查询）：4处
// foo(2..、 = a;、a..、..b

