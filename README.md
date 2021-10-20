# js-unknown
learning javascript

## 第一部分 作用域和闭包
### 第1章 作用域是什么？

- 作用域是一套规则，用于确定在何处以及如何查找变量。如果查找的目的是对变量进行复制，那么就会使用LHS查询；如果目的是获取变量的值，就会使用RHS查询。

### 第2章 词法作用域
- 简单的说，词法作用域就是定义在此法阶段的作用域。换句话说，词法作用域是由你写代码时将变量和块作用域写在哪里来决定的，因此词法分析器处理代码时会保持作用域不变。

### 第3章 函数作用域和块作用域
- 函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复用（事实上在嵌套作用域也可以使用）。

### 第4章 提升
- 变量声明和函数声明会被提升，但是函数表达式不会
- 函数会首先被提升，然后才是变量
- 我们习惯将var a = 2;看作一个声明，而实际上Javascript引擎并不这么认识。它将var a和a = 2;当作两个单独声明，第一个编译阶段的人物，而第二个则是执行阶段的任务。
- 这意味着无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理，可以将这个过程形象地想象成所有的声明（变量和函数）都会被移动到各自作用域的最顶端，这个过程被称为提升。

### 第5章 作用域闭包
- 当函数可以记住并访问所在的词法作用域时，即使函数时当前词法作用域之外执行，这时就产生了闭包。
- 两个主要特征：
1. 为创建内部作用域而调用了一个包装函数；
2. 包装函数的返回值必须至少一个对内部函数的音乐，这样就会创建涵盖整个包装函数内部作用域的闭包。

## 第二部分 this和对象原型
### 第1章 关于this
- this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。