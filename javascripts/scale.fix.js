var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
var slideIndex = 1;
showSlides(slideIndex, 'first-mySlides', 'first-dot');
showSlides(slideIndex, 'second-mySlides', 'second-dot');


// Next/previous controls
function plusSlides(n, slides_classname, dot_classname) {
  showSlides(slideIndex += n, slides_classname, dot_classname);
}

// Thumbnail image controls
function currentSlide(n, slides_classname, dot_classname) {
  showSlides(slideIndex = n, slides_classname, dot_classname);
}

function showSlides(n, slides_classname, dot_classname) {
  var i;
  var slides = document.getElementsByClassName(slides_classname);
  var dots = document.getElementsByClassName(dot_classname);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
