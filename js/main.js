/* ----------------------------------------
  Contact Modal
  ------------------------------------------- */


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(".contact-button").click(function() {
  $('html,body').animate({
      scrollTop: $("#contact-form").offset().top},
      'slow');
});

/* ----------------------------------------
Image Carousel
------------------------------------------- */
// Create a variable to keep track of which image we are currently on.
var currentImageNumber = 0;

// When the user clicks the next button (#next)
   // if currentImageNumber is less than 3
     // Add one to currentImageNumber
     // Log currentImageNumber to the console
  // else
    // Set currentImageNumber to zero
    // Log currentImageNumber to the console

$('#next').on('click', function () {
if (currentImageNumber < 11) {
  currentImageNumber += 1;
} else {
  currentImageNumber = 0;
}  console.log(currentImageNumber);
$('.carousel-img').fadeOut(.3);
$('.carousel-img').eq(currentImageNumber).fadeIn(.3);
});
// Fade out all images
  // Fade in the image at the currentImageNumber

// When the user clicks the previous button (#previous)
$('#previous').on('click', function () {
  if (currentImageNumber > 0) {
    currentImageNumber -= 1;
  } else {
    currentImageNumber = 11;
  } console.log(currentImageNumber);
  // if currentImageNumber is greater than 0
    // Subtract one from the currentImageNumber
    // Log currentImageNumber to the console
 // else
   // Set currentImageNumber to three
   // Log currentImageNumber to the console
});
function Timer() {
  setInterval(function(){
    if (currentImageNumber < 11) {
      currentImageNumber += 1;
    } else {
      currentImageNumber = 0;
  } $('.carousel-img').fadeOut(.3);
    $('.carousel-img').eq(currentImageNumber).fadeIn(.3);
  },5000);
}
Timer();


/* ----------------------------------------
Hamburger
------------------------------------------- */

$('.hamburger').on('click', function (){
  $('.side-nav').toggleClass('open');
});
$('.exit').on('click', function(){
  $('.side-nav').removeClass('open');
});
