(function() {

  'use strict';

  var str = Number('an arbitrary string');
  console.log(typeof str);

  var num = Number(str);

  console.log(typeof num);
  console.log(Boolean('0'));
  console.log(Boolean(''));
  console.log(2 + 2 + '1' - 2 + 3 + '1');
  var x = 2;
  var y = '3';

  /* jshint -W007 */
  console.log(+x + +y);
  console.log(--x);
  console.log(--y);
  console.log('Zee' < 'Zeee');
  console.log('true' != 1);
  var b = '0';
  var a = 0;
  console.log(a === b); //strict equality operator checks equality without type conversion

  console.log(null == undefined);
  console.log(typeof(null));
  console.log(typeof(undefined));

})();