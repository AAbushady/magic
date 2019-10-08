/*global console*/
/*jshint esversion:6*/


(function () {
    'use strict';
    // 6/10/60 is a magic date because month * day === year.
    var month = 3;
    var day = 30;
    var year = 90;

    if (month * day === year) {
        console.log("Date is Magic!");
    } else {
        console.log("Date is Not Magic...");
    }
})();
