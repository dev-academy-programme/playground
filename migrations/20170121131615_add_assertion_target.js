exports.up = function (knex) {
  return knex.schema.table('assertions', table => {
    table.string('target')
  })
}

exports.down = function (knex) {
  return knex.schema.table('assertions', table => {
    table.dropColumn('target')
  })
}
