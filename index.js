$(document).ready(function() {

  var clock = setInterval(function() {
    var currentTime = new Date();
    var time = currentTime.toLocaleTimeString('en-US');
    // var minutes = currentTime.getMinutes().toLocaleTimeString( "America/Los_Angeles");
    // var seconds = currentTime.getSeconds().toLocaleTimeString( "America/Los_Angeles");

    var clockFace = $(
      '<p>' + time + '</p>'
    );
    $('#clock').html(clockFace);
  }, 1000);
});
