var fn = function(one, two) {
	console.log(this, one, two);
};

var y= {
	name: "yellow"
}

var g={name: "g"}, b={name: "b"};
fn.call(y, g, b);

var r = { name: "red" };
r.method = fn;
new r.method(g, b);
