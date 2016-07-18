import test from 'ava'
import cp from 'child_process'

test.cb('acts like a cli program', t => {
  cp.execFile('./index.js', ['-h'], (err, stdout, stderr) => {
    t.falsy(err)
    t.truthy(stdout)
    t.falsy(err)
    t.end()
  })
})
