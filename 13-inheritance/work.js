function Car(odometer, mpg, gallons, tires) {
  if (odometer) {
    this.odometer = odometer;
    this.mpg = mpg;
    this.gallons = gallons;
    this.tires = tires;
  }
}

Car.prototype.odometer = 0;
Car.prototype.mpg = 20;
Car.prototype.gallons = 20;
Car.prototype.tires = 10000;

Car.prototype.drive = function(miles) {
  console.log('Trip:', miles, 'miles');
  var range = this.mpg * this.gallons;
  console.log('gallons:', this.gallons);
  console.log('Range:', range);
  var fuleConsumption = miles / this.mpg;
  console.log('Fuel consumption:', fuleConsumption);
  if(miles < range) {
    this.odometer += miles;
    this.gallons -= fuleConsumption;
    for (var tire in this.tires) {

    }
  } else {
    console.warn('Too far!', 'gallons', this.gallons, 'odometer', newCar.odometer);
  }
};

var newCar = new Car(0, 20, 40, 40000);
newCar.drive(120);
console.log(newCar.odometer);

// Car.prototype.printStats = function() {
//   console.log(this.year, this.make, this.model);
// };

// function Vechicle(numOfWheels) {
//   if(numOfWheels) {
//     this.numWheels = numOfWheels;
//   }
// }
//
// Vehicle.prototype.numWheels = 4;
// var truck = new Vehicle();
// var motorcycle = new Vehicle();
// var sandwhich = new Vehicle();
