function toggleText() {
  // ваш код...
  let btn = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  btn.onclick = function() {
    text.hidden = !text.hidden;

  }
}
