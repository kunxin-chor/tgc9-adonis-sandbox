'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddFkToSightingSchema extends Schema {
  up () {
    this.table('sightings', (table) => {
      // alter table
      table.integer('sighting_type_id').unsigned()
			table.foreign('sighting_type_id').references('sighting_types.id')
    })
  }

  down () {
    this.table('sightings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddFkToSightingSchema
