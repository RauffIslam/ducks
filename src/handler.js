"use strict";

const Duck = require("./duck");
const Health = require("./health")


/**
 * Duck Handler
 * @property {Object} ducks Object mapping of ducks
 * @property {Object} foods Object of available foods and their healing
 */

class Handler extends Health {

    constructor () {

        super();
        this.ducks = {};
        this.foods = {

            "bread": 10
    
        };

    }

    /**
     * Create Duck
     * @argument {Object} [duck] The duck
     * @argument {String} [duck.name] The duck's name
     * @argument {String} [duck.description="No Description"] The duck's description. Defaults to "No Description"
     * @argument {Array<String>} [duck.features] The duck's features
     * @argument {Number} [duck.health] The duck's health. Defaults to 100
     * @returns {Duck}
     */

    create (duck) {

        if (duck.name.includes(" ")) {

            throw new Error ("A duck's name may not contain spaces.");

        }

        if (this.ducks[duck.name]) {

            throw new Error("A duck with this name already exists.");

        }

        if (typeof duck === "object") {

            this.ducks[duck.name] = new Duck (duck);
            return this.ducks[duck.name];

        } else {

            throw new Error ("Your duck must be an object.");

        }

    }

}

module.exports = Handler;
