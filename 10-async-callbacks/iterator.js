var students = ['andrew', 'kevin', 'kyleigh'];
function iterator(ary) {
  return function() {
    return ary.pop();
  };
}

var studentGetter = iterator(students);
console.log(studentGetter());
console.log(studentGetter());
console.log(studentGetter());

// function setLastName(a) {
//   console.log(a + ' Bartholmew');
// }
//
// var student1 = 'brian';
// var student2 = 'bennet';
// var student3 = 'nick';
//
// setLastName(student1)
// setLastName(student2)
// setLastName(student3)
