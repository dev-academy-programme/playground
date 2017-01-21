exports.up = function (knex) {
  return knex.schema.createTable('assertions', table => {
    table.increments('id').primary()
    table.string('actual')
    table.string('expected')
    table.string('message')
    table.integer('task_id').references('tasks.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('assertions')
}
