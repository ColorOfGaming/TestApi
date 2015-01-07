$(document).ready(function() {
  videoelmt = '<li>'+'<iframe width="560" height="315" src="//www.youtube.com/embed/sbQQKI1Fwo4?rel=0" frameborder="0" allowfullscreen></iframe>'+'<li>';
  document.getElementById("results").innerHTML = videoelmt;
  $("#results").append(videoelmt);
});