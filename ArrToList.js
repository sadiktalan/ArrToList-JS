var list = {value: null, rest: null};
var isFirst = Boolean(true);

var arrToList = function (arr) {
    if (arr.length !== 0) {
        var node = {value: null, rest: null};
        if (isFirst) {
            list = node;
            isFirst = false;
        }
        node.value = arr.shift();
        node.rest = arrToList(arr);
        return node;
    } else {
        return null;
    }
};

var myarr = range(10, 15);
arrToList(myarr);
console.log(JSON.stringify(list, null, 4));