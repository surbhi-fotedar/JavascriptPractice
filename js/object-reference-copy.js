(function() {
  'use strict';
  var user = {
    name: 'john'
  };
  alert('previous name: ' + user.name);

  var admin = user;
  admin.name = 'johnny';

  alert('updated name: ' + user.name);
})();