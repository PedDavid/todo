const test = require('tape')

test('2 + 2 is 4', t => {
  const res = 2 + 2
  t.equal(res, 4)
  t.end()
})
