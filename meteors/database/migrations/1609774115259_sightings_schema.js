'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SightingsSchema extends Schema {
  up () {
    this.table('sightings', (table) => {
      // alter table
      table.integer('country_id').unsigned().notNullable();
			table.foreign('country_id').references('countries.id')
    })
  }

  down () {
    this.table('sightings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SightingsSchema
