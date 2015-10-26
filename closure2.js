var add = (function() {
		var counter = 0;
		//add is the return value of the self invoking function;
		return function() {
			console.log(counter);
			return counter += 1;  //counter still have access to the parent scope even after function returns;
		}
})();

add();
add();
add();
