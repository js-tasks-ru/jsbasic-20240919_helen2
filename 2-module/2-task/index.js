function isEmpty(obj) {
  // ваш код...
  for(let key in obj) {
    if(key) return false;
  } return true;
}
