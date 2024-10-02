function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let result = arr.filter(item => isFinite(item));
  
  let numMax = Math.max(...result);
  const obj = {};
  obj.min = Math.min(...result);
  obj.max = numMax;
  return obj;
}
