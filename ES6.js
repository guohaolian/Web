class Example{
    constructor(name){
        this.name = name;
    }
    init(){
        const fun=()=>{
            console.log(this.name);
        };
        console.log(fun);
        fun();
    }
}
const e=new Example('ES6 Example');
e.init();

/* function Example(name) {
    this.name = name;
}

Example.prototype.init = function() {
    var self = this;
    
    var fun = function() {
        console.log(self.name);
    };
    fun();
}; */
/* function Example(name) {
    this.name = name;this .init=function(){console.log(this.name);};
} */

/* var e = new Example('ES6 Example');
e.init(); */
/* 类定义转为构造函数： 
ES6 使用 class 关键字定义类，而在 ES5 中，我们使用构造函数来创建对象。
class Example { ... } 转换为 function Example(name) { ... }，并在构造函数中初始化 this.name。
方法定义转为原型方法： 
ES6 中定义的类方法（如 init 方法）实际上是在类的原型上定义的。在 ES5 中，我们需要显式地将方法添加到构造函数的 prototype 上。
init() { ... } 转换为 Example.prototype.init = function() { ... }。
箭头函数转为普通函数： 
ES6 引入了箭头函数 () => {}，它会自动绑定 this 到当前上下文。
在 ES5 中，箭头函数不可用，我们使用普通函数 function() {}。为了保持 this 的引用，我们通常会在方法内部定义一个变量（如 self 或 that）来保存当前的 this 值。
const fun = () => { ... }; 转换为 var fun = function() { ... };，并在方法内部使用 self 来访问 this 的属性。
常量声明转为变量声明： 
ES6 中使用 const 声明常量，而在 ES5 中，我们使用 var 来声明变量。
const self = this; 转换为 var self = this;。 */