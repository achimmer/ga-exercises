// {}; = empty object

var toyotaCamry = {
  year: 2010,
  mileage: 186000,
  color: 'mineral green'
};

console.log(toyotaCamry);
console.log('My car has: ' + toyotaCamry.mileage + ' miles');
console.log('Its color is: ' + toyotaCamry.color);

// car point job
toyotaCamry.color = 'blue';
console.log('its new color is: ' + toyotaCamry.color);

toyotaCamry['num-wheels'] = 4;
console.log('my car has: ' + toyotaCamry['num-wheels'] + ' wheels');
