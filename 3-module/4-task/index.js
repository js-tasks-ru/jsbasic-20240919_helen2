function showSalary(users, age) {
  // ваш код...
  let arr = users.filter(item => item.age <= age) 
      .map(item => `${item.name}, ${item.balance}`);
     
      let str = arr.join('\n');
    return str;
}
