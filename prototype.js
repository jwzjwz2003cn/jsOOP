var gold = {a:1};
console.log(gold.a);


var rose = Object.create(gold); //similar to creating an subclass of object gold
rose.b = 2;
console.log (rose.a);
console.log (rose.b);
console.log(rose.toString());
