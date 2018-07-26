"use strict";

/**
 * Duck Framework
 */

class Duck {

    /**
     * @argument {Object} [duck] The duck
     * @argument {String} [duck.name] The duck's name
     * @argument {String} [duck.description="No Description"] The duck's description. Defaults to "No Description"
     * @argument {Array<String>} [duck.features] The duck's features
     * @argument {Number} [duck.health=Math.floor(Math.random() * 100)] The duck's health. Defaults to a random number between 1 and 100
     */

    constructor (duck) {

        this.name = duck.name;
        this.description = duck.description || "No Description";
        this.features = duck.features;
        this.health = duck.health || Math.floor(Math.random() * 100);

    }

}

module.exports = Duck;
