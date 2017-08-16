var list = {value: null, rest: null};
var isFirst = Boolean(true);

/**
 * creates an sequential number array between 2 numbers
 * @param num1
 * @param num2
 * @param incBy is the step value; default = 1
 * @returns {Array}
 */
var range = function (num1, num2, incBy) {
    if (incBy === undefined) incBy = 1;
    var arr = [];
    for (var x = num1; (incBy > 0 ? x <= num2 : x >= num2); x += incBy) {
        arr.push(x);
    }
    return arr;
};

/**
 * converts am array to a list by recursive
 * @param arr given array
 * @returns {list} with 2 fields:{value; rest};
 */
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

/**
 * examples to arrayToList function
 * @type {Array}
 */
var myarr = range(10, 15);
var myList = arrToList(myarr);
console.log(JSON.stringify(list, null, 4));

console.log();


/**
 * converts a list to an array
 * @param list given list
 * @returns {Array}
 */
var listToArr = function (list) {
    var arr = [];
    while (list !== null) {
        arr.push(list.value);
        list = list.rest;
    }

    return arr;
};

/**
 * example to list to array function
 * @type {Array}
 */
var newArr = listToArr(myList);
console.log(newArr);