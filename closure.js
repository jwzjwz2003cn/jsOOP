var inners = [];
var outter = function() {
	for (var i = 0; i < 3; i++){
		inners[i] = function(){
				console.log(i);
		};
	}

}

outter();
for (var j = 0; j < 3; j++){
	inners[j]();
}
