exports.up = function (knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('title')
    table.text('instructions')
    table.timestamps()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
}
