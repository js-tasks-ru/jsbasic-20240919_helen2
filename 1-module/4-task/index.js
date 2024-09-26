function checkSpam(str) {
  // ваш код...
  let spam = str.toLowerCase();
  if(spam.includes('1xbet') || spam.includes('xxx')){
    return true;
  } return false;
}
