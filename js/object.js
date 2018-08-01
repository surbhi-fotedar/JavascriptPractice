(function() {
  // var user = {
  //   name: 'john',
  //   age: 39
  // };

  // var key = prompt('what do you want to know', 'name');
  // alert(user[key]);
  // function makeUser(name, age) {
  //   return {
  //     name: name,
  //     age: age
  //     // ...other properties
  //   };
  // }

  // var user = makeUser("John", 30);
  // alert(user.name);

  var user = {};
  alert(user.noSuchProperty === undefined);

  var obj = {
    test: undefined
  };
  alert(obj.test);
  alert('test' in obj);
})();