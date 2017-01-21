const {NodeVM} = require('vm2')

module.exports = function check (target, code, assertions, testContext = {}) {
  const vm = new NodeVM({
    console: 'inherit',
    require: {
      builtin: ['assert']
    },
    sandbox: {
      testContext
    },
    timeout: 3000
  })

  vm.run(`
    ${code}
    
    testContext.${target} = ${target}
  `)
  return vm.run(`
    const assert = require('assert')
    let correct = false
    let log = {}
    try {
      ${assertions.reduce((acc, assertion) => `assert.deepEqual(testContext['${assertion.actual}'], ${assertion.expected}, '${assertion.message}')\n`, '')}
      correct = true
    } catch (err) {
      log = { err, testContext }
    }

    module.exports = { correct, log }
  `)
}
