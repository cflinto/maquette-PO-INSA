
/*var imageScrollDivs = document.getElementsByClassName('slider-change');

for(var i=0;i<imageScrollDivs.length;++i)
{
	imageScrollDivs[i].onclick = function(event) {

		// This will prevent the default action of the anchor
		//event.preventDefault();

		//window.scrollTo(100, 0);
		//window.location.hash.show();

    	window.scrollTop(0);

		// Failing the above, you could use this, however the above is recommended
		//return false;

	};
}*/

$('a[href*=\\#]').on('click', function(event){
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);


var countDownDate = new Date("Jan 27, 2018 9:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML = days + "J " + hours + "H "
  + minutes + "M " + seconds + "S ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);




