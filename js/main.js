/* ----------------------------------------
Buttons
------------------------------------------- */
$('#read-more-problem').on('click', function () {
     window.location.href="problem.html"
  });
$('#read-more-solution').on('click', function () {
     window.location.href="solution.html"
  });
$('#read-more-about').on('click', function () {
     window.location.href="about.html"
  });


  /* ----------------------------------------
  Contact Modal
  ------------------------------------------- */

  $(".contact-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-form").offset().top},
        'slow');
});

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
