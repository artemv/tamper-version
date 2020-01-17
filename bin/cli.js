#!/usr/bin/env node
'use strict';
const meow = require('meow');
const m = require('..');

const cli = meow(`
    Usage
      $ tamper-version <suffix> [--full] 

    Examples
      $ tamper-version binaries
    This will add "-binaries" suffix to package.json' version, so if it was 1.0.0 it will become 1.0.0-binaries.

      $ tamper-version \`cat .version\` --full
    This will put contents of .version file to package.json' version field.
    Prior to changing package.json will be saved to package.json.bak.
`, {
  flags: {
    full: {
      type: 'boolean',
    }
  }
});

if (!cli.input[0]) {
  console.log(cli.help);
  process.exit(1);
}

m(cli.input[0], cli.flags);
