// === for loop example
// var students = ['bob', 'sara', 'fred']
// console.log('before loop');
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }
// console.log('end loop');

// === ForEach example
var students = ['bob', 'sara', 'fred']
console.log('before loop');
students.forEach(function(student) {
  console.log(student);
});
console.log('end loop');
