const fs = require('fs');

function main(suffix, flags = {}) {
  let pkg = fs.readFileSync('package.json');
  fs.writeFileSync('package.json.bak', pkg);
  pkg = JSON.parse(pkg);
  pkg.version = flags.full ? suffix : `${pkg.version}-${suffix}`;
  fs.writeFileSync('package.json', JSON.stringify(pkg));
}

module.exports = main;
