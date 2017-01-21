const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const connection = require('knex')(config)
const marked = require('marked')

const getTask = taskId => connection
  .select(
    'tasks.id as id',
    'tasks.title as title',
    'tasks.instructions as instructions',
    'assertions.target as target',
    'assertions.actual as actual',
    'assertions.expected as expected',
    'assertions.message as message'
  )
  .table('tasks')
  .join('assertions', 'tasks.id', '=', 'assertions.task_id')
  .where('tasks.id', taskId)
  .then(rows => {
    if (rows.length === 0) {
      return rows
    }
    const assertions = rows.map(({ target, actual, expected, message }) => ({ target, actual, expected, message }))
    const { id, title, instructions } = rows[0]
    return [{ id, title, instructions: marked(instructions), assertions }]
  })
  .catch(console.error)

const getTasks = () => connection
  .select()
  .table('tasks')
  .then(rows => {
    if (rows.length === 0) {
      return rows
    }
    return rows.map(({ id, title, instructions }) => ({ id, title, instructions: marked(instructions) }))
  })

module.exports = {
  getTask,
  getTasks
}
