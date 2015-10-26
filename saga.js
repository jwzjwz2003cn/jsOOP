function randomIntFromArray(length){
		return Math.floor(Math.random() * length);
};

function aHero() {
	var heroArray = ["Gal", "Pal", "Maya", "Fish"];
	var index = randomIntFromArray(heroArray.length);
	return heroArray[index];
};

function aFoil() {
	var foilArray = ["Cat", "Cow", "Elephant", "Dragon", "Gerbal", "Racoon", "Alien"];
	var index = randomIntFromArray(foilArray.length);
	return foilArray[index];
};

function aDeed(){
	var deedArray = ["Rubs", "Tips", "Robs", "Taps", "Grasps", "Illuminates", "Slaps"];
	var index = randomIntFromArray(deedArray.length);
	return deedArray[index];
}

var hero = aHero();

var newSaga = function() {
	var foil = aFoil();
	var saga = function() {
			var deed = aDeed();
			console.log(hero + " " + deed + " " + foil);
	}
	saga();
	saga();
};
newSaga();
newSaga();
