var Car = function(loc) {
	var obj = Object.create(Car.prototype); //will be inserted automatically when using keyword new
	obj.loc = loc;
	return obj; //will be inserted automatically when using keyword new
}

Car.prototype.move = function() { //prototype is just a cosmetic choice of keyword, could replace to anything else
		this.loc++;
		console.log(this.loc);
};

var car1 = Car(10);
car1.move();

console.dir(Car.prototype.constructor);
console.dir(car1.constructor);
console.log(car1 instanceof Car);
