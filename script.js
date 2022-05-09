// Get the position on the page of the SVG
/* var svgLocation = document.getElementById("svg").getBoundingClientRect();

// Scroll offset that triggers animation start.
// In this case it is the bottom of the SVG.
var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;

// Function to handle the scroll event.
// Add an event handler to the document for the "onscroll" event
function scrollAnimTriggerCheck(evt) {
  var viewBottom = window.scrollY + window.innerHeight;
  if (viewBottom > offsetToTriggerAnimation) {
    // Start the SMIL animation
    const letters = document.querySelectorAll(".noletters");
    console.log(letters);
    letters.forEach(function (letter) {
      console.log("lol");
      letter.classList.add("letters");
    });

    // Remove the event handler so it doesn't trigger again
    document.removeEventListener("scroll", scrollAnimTriggerCheck);
  }
}

// Add an event handler to the document for the "onscroll" event
document.addEventListener("scroll", scrollAnimTriggerCheck); */
