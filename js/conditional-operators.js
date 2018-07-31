(function() {

  var year = prompt('In which year was ECMAScript-2015 specification published?', '');

  if (year < 2015) {
    alert('Too early...');
  } else if (year > 2015) {
    alert('Too late');
  } else {
    alert('Exactly!');
  }
  var age = prompt('how old are you?', '');
  var accessAllowed = (age > 18) ? true : false;
  alert(accessAllowed);

})();