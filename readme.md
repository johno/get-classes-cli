# get-classes-cli [![Build Status](https://secure.travis-ci.org/johnotander/get-classes-cli.svg?branch=master)](https://travis-ci.org/johnotander/get-classes-cli) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get classes used in an HTML string via the CLI.

## Installation

```bash
npm i -g get-classes-cli
```

## Usage

```javascript
get-classes -h

  Get classes used in an HTML string

  Usage
    $ curl johnotander.com | get-classes

  Options
    -h, --help - Get help menu
    -v, --version - Get the version

  Examples
    $ curl google.com | get-classes
    $ cat index.html | get-classes
```

## Related

- [`get-classes-from-html`](https://github.com/johnotander/get-classes-from-html)

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
