$(function() {
  var $stickyColor = $('#color');
  var $stickyText = $('#sticky-text');
  var $submit = $('#submit');
  var $stickyBoard = $('#sticky-board');

  var count = 2;

  // Submit
  $submit.on('click', function() {
    console.dir(this);
    var backgroundColor = $stickyColor.val();
    var text = $stickyText.val();
    console.log(text);

    var $stickyPost = '<article class="sticky">' + text + '</article>';
    console.log(stickyPost);

    $stickyPost.css('background', backgroundColor);
    $stickyBoard.append($stickyPost);
    count++;
  });

});
