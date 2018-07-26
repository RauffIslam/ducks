"use strict";

/**
 * Health Handler
 * @property {Object} potions Object of potions and their healing values
 */


class Health {

    /**
     * @argument {String} food Currently the only food is "bread". (Might be because thats the only food I know ducks eat)
     * @argument {String} name Name of duck to feed
     */

    feedDuck (duck, food) {

        if (typeof duck === "string") {

            if (this.ducks[duck]) {

                this.feed (duck, food)

            } else {

                throw new Error ("There is no duck with this name")

            }

        } else if (typeof duck === "object") {

            if (this.ducks[duck.name]) {

                this.feed (duck.name, food)

            } else {

                throw new Error ("There is no duck with this name")

            }

        }

    }

    feed (name, food) {

        if (this.ducks[name]) {

            if (this.foods[food]) {

                if (this.ducks[name].health === 100) {

                    throw new Error (`${name} is already full health.`)

                } else if (this.ducks[name].health >= 100 - this.foods[food]) {

                    this.ducks[name].health += 100 - this.ducks[name].health

                } else {

                    this.ducks[name].health += this.foods[food]

                }

            } else {

                throw new Error ("Invalid Food Type.")

            }

        } else {

            throw new Error ("There is no duck with this name")

        }

    }

}

module.exports = Health
