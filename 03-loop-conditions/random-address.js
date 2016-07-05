var number = ['5411', '2600', '1337', '0666', '2300'];
var street = ['Oak Street', 'Hemlock Ave', 'Cedar Blvd', 'Fir Dr', 'Cherry Lane'];
var city = ['Gig Harbor', 'Tacoma', 'Seattle', 'Leander', 'Elinor', 'Port Orchard'];
var state = ['TX', 'CA', 'WA', 'OR', 'ID'];
var zip = ['78641', '98335', '83410', '98136', '12345'];

var selNum = Math.floor(Math.random() * number.length, 0);
var selSt = Math.floor(Math.random() * number.length, 0);
var selCity = Math.floor(Math.random() * number.length, 0);
var selState = Math.floor(Math.random() * number.length, 0);
var selZip = Math.floor(Math.random() * number.length, 0);

console.log(number[selNum], street[selSt], city[selCity], state[selState], zip[selZip]);
