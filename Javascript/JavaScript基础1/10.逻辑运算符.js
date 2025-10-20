
    var f1 = true;
    var f2 = false;
    /**
     * &&:两边都为true 结果才是true
     *      当前面的表达式为true时 才会计算后面的表达式
     * 例子：
     *       var a = 10;
             var b = 20;
     var result =  a > b && a++ < b++;
     console.log(result,a,b);
     * ||：有一个为true 结果就是true
     * 注意：当前面的表达式为true时 则 不再计算后面的表达式
     * !:
     *  !true-->false
     *  !false-->true
     */
    console.log(f1 && f2);//false
    console.log(f1 || f2);//true
    console.log(!f2);//true
    var a = 10;
    var b = 20;
    var result =  b>a || a++ > b++;
    console.log(result,a,b);
