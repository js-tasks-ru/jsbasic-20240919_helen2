function filterRange(arr, a, b) {
  // ваш код...
  let filterNumbers = arr.filter(item => {
    if (item >= a && item <= b) return item;
  }); return filterNumbers;
}
