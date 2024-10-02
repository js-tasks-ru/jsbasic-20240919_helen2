function camelize(str) {
  // ваш код...
  let arr = str.split('-').reduce((currentStr, item) => {
    return currentStr + item[0].toUpperCase() + item.slice(1);
 }); return arr;
}
