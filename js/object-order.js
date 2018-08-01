(function() {
  'use strict';
  var codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };

  for (var code in codes) {
    alert(+code); // 49, 41, 44, 1
  }
})();