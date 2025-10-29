const list=[1,2,3,4,5];

const callback=item=>{
    item=item+1;
    console.log(item);
}
list.forEach(callback);
/* var arr = ['李白', '杜甫'];

        console.log('函数调用前arr[0]', arr[0]);//李白

        function changArr(b) {

            arr = ['胡歌', '吴彦祖'];

            console.log('函数调用中arr[0]', arr[0]);//胡歌

        }
        changArr(arr);

        console.log('函数调用后arr[0]', arr[0]);//胡歌 */


var arr = ['李白', '杜甫'];

        console.log('函数调用前arr[0]', arr[0]);//李白

        function changArr(b) {
            b = ['胡歌', '吴彦祖'];
            console.log('函数调用中arr[0]', b[0]);//胡歌
        }
        changArr(arr);

        console.log('函数调用后arr[0]', arr[0]);//胡歌 李白
