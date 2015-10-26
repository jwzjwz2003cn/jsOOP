var Car = function(loc) { //pseudoclass
	this.loc = loc;
};

var CarProto = function (loc) { //prototypal class
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
};

var CarFunction  = function(loc){ //functional class
	var obj = {loc: loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj
}
Car.prototype.move = function() {
	this.loc++;
};
