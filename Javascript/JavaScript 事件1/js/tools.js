/**
 * Created by Administrator on 2019/1/9.
 */
var tools = {
    'addEvent': function (ele, type, methodName) {
        if (ele.addEventListener) {
            ele.addEventListener(type, methodName);
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + type, methodName);
        } else {
            ele['on' + type] = methodName;
        }
    },
    'removeEvent': function (ele, type, methodName) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, methodName);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, methodName);
        } else {
            ele['on' + methodName] = '';
        }
    }
};