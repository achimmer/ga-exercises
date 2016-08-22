var App = {
  getGithubUserInfo: function() {
    $.get('https://api.github.com/users/achimmer', function(data) {
      $('body').append(data.login);
    });
  },
  getGreeting: function() {
    var hour = new Date().getHours();
    if(hour < 12) {
      return 'good morning';
    }
  }
};
