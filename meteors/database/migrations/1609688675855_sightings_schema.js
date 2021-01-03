'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SightingsSchema extends Schema {
  up () {
    this.table('sightings', (table) => {
      table.datetime('datetime');
      table.dropColumn('date');
    })
  }

  down () {
    this.table('sightings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SightingsSchema
