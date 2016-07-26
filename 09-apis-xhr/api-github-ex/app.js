$(function() {

  var $getProfile = $('#getProfile');

  $getProfile.on('click', function() {
    $.get('https://api.github.com/users/achimmer', function (data) {
      alert(data.location);
      console.log(data);
    });
  });

});
