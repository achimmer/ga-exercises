$(function() {

  var user = {
    firstName: 'Hope',
    lastName: 'Solo',
    showFullName: function(brother, sister) {
      console.log('this:', this);
      console.log(this.firstName, this.lastName)
    }
  };

  var bob = {
    firstName: 'Bob',
    lastName: 'Solo'
  };

  // what is logged? Why?
  $('#print').on('click', function() {
    var boundFunction = user.showFullName.bind(bob);
    boundFunction();
    // var siblings = ['cole', 'sally'];
    // user.showFullName.bind(bob, ['cole', 'sally']);
  });
});
