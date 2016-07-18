#! /usr/bin/env node

const meow = require('meow')
const shtml = require('shtml')
const uniq = require('lodash.uniq')
const getStdin = require('get-stdin')
const getClasses = require('get-classes-from-html')

const cli = meow(shtml`
<div>
  <underline>Usage</underline>
  $ curl johnotander.com | get-classes<br><br>

  <underline>Options</underline>
  -h, --help - Get help menu
  -v, --version - Get the version<br><br>

  <underline>Examples</underline>
  $ curl google.com | get-classes
  $ cat index.html | get-classes
</div>
`, {
  alias: {
    h: 'help',
    v: 'version'
  }
})

getStdin().then(html => console.log(uniq(getClasses(html)).join('\n')))
