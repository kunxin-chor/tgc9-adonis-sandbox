'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SightingSchema extends Schema {
  up () {
    this.create('sightings', (table) => {
      table.increments()
      table.string("lat").notNullable();
      table.string("lng").notNullable();
      table.date("date").notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('sightings')
  }
}

module.exports = SightingSchema
