'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SightingTypeSchema extends Schema {
  up () {
    this.create('sighting_types', (table) => {
      table.increments()
      table.string("name");
      table.timestamps()
    })
  }

  down () {
    this.drop('sighting_types')
  }
}

module.exports = SightingTypeSchema
