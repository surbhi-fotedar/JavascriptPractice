(function() {
    'use strict';
    var str = Number("an arbitrary string");
    console.log(typeof str);

    let num = Number(str);

    console.log(typeof num);
    console.log(Boolean("0"));
    console.log(Boolean(" "));
    console.log(2 + 2 + '1' - 2 + 3 + '1');
    var x = 2;
    var y = '3';
    console.log(+x + +y);
    console.log(--x);
    console.log(--y);


})();