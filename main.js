var responsive = function() {

  var top = document.getElementById("top_nav");

  if (top.className === "top_nav") { top.className += " responsive";}
  else { top.className = "top_nav";}

}