$(document).ready(function(){
  // When the user scrolls the page, execute reponsiveNavBar
	window.onscroll = function() {stickyFunction()};

	// Get the myTopnav
	var myTopnav = document.getElementById("myTopnav");

	// Get the offset position of the myTopnav
	var sticky = myTopnav.offsetTop;

	// Add the sticky class to the myTopnav when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function stickyFunction() {
	  if (window.pageYOffset >= sticky) {
	    myTopnav.classList.add("sticky")
	  } else {
	    myTopnav.classList.remove("sticky");
	  }
	}
});
