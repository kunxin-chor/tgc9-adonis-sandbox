'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sighting extends Model {
   country () {
    return this.belongsTo('App/Models/Country')
  }
}

module.exports = Sighting
