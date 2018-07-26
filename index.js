const Pond = require("./src/pond");

var pond = new Pond ({
    size: "Large",
    livable: true
});

var duck = pond.createDuck({
    name: "duck",
    description: "The Coolest Duck",
    features: ["Cool", "Loves Bread"],
    health: 95
});


console.log(duck);
console.log(pond);


if (duck.health < 100) {

    console.log(`(Before) ${duck.name}: ${duck.health}`)

    pond.feedDuck(duck, "bread")

    console.log(`(After) ${duck.name}: ${duck.health}`)

}

