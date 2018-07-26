# DUCKS (in js)

## Creating a Pond with a Duck
```javascript
const Pond = require("./src/pond"); // gets pond

var pond = new Pond ({
    size: "Large",
    livable: true
}); // Creates Pond

var duck = pond.createDuck({
    name: "duck",
    description: "The Coolest Duck",
    features: ["Cool", "Loves Bread"],
    health: 95
}); // Creates Duck
```
