const fs = require('fs');

function main(suffix, flags = {}) {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));
  pkg.version = flags.full ? suffix : `${pkg.version}-${suffix}`;
  fs.writeFileSync('./package.json', JSON.stringify(pkg));
}

module.exports = main;
