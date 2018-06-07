"use strict";

const shuffleArr = require('shuffle-array');

class Utils {
    static forEachToArray (arr, fun) {
        let res = [];
        arr.forEach(function(item) {
            res.push(fun(item));
        });
        return res;
    }

    static shuffle(arr) {
        return shuffleArr(arr);
    }
}

module.exports = Utils;