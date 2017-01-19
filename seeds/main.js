exports.seed = (knex, Promise) => knex('tasks').del()
  .then(() => Promise.all([
    knex('tasks').insert({title: 'Empty object literal', instructions: 'Creating blank objects: sound simple?\n\nAssign an empty object literal to a variable named `obj`.'}),
    knex('tasks').insert({title: 'Add a property', instructions: 'Using dot or square brackets, create the property `color` on the object `obj`.'}),
    knex('tasks').insert({title: 'Create an object literal with a property', instructions: 'Assign an object literal to the variable `obj` that has a property named `height`.'})
  ]))
