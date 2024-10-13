function hideSelf() {
  // ваш код...
  let elem = document.querySelector('.hide-self-button');
  elem.onclick = function() {
    elem.hidden = true;
  }
}
