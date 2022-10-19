window.onload = function() {
  const form = document.getElementById("quiz");
  form.onsubmit = function(event) {
    event.defaultPrevented();
  }
};