function fadeIn(el, speed) {
  var step = 1 / speed;
  var interval = setInterval(function() {
    if (+el.style.opacity >= 1)
      clearInterval(interval);
      
    el.style.opacity = +div.style.opacity + step;
  }, speed / 1000);
}

var div = document.getElementById("data")
var button = document.getElementById("btn");

button.addEventListener('click', function(event) {
  fadeIn(div, 300);
});
