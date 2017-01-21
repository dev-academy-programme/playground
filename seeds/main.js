exports.seed = (knex, Promise) => knex('tasks').truncate()
  .then(() => knex('assertions').truncate())
  .then(() => knex.migrate.latest())
  .then(() => Promise.all([
    knex('tasks').insert({id: 1, title: 'Empty object literal', instructions: '_A subheading of some kind._\n\nCreating blank objects: sound simple?\n\nAssign an empty object literal to a variable named `obj`.'}),
    knex('tasks').insert({id: 2, title: 'Add a property', instructions: 'Using dot or square brackets, create the property `color` on the object `obj`.'}),
    knex('tasks').insert({id: 3, title: 'Create an object literal with a property', instructions: 'Assign an object literal to the variable `obj` that has a property named `height`.'})
  ]))
  .then(() => Promise.all([
    knex('assertions').insert({id: 1, target: 'obj', actual: 'obj', expected: '{}', message: 'obj is empty object', task_id: 1}),
    knex('assertions').insert({id: 2, target: 'obj', actual: 'obj.hasOwnProperty("color")', expected: 'true', message: 'obj has a `color` property', task_id: 2}),
    knex('assertions').insert({id: 3, target: 'obj', actual: 'obj.hasOwnProperty("height")', expected: 'true', message: 'obj has a `height` property', task_id: 3})
  ]))
