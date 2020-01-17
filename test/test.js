import test from 'ava';
const fs = require('fs');
import m from '..';

test('suffix', (t) => {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));
  m('hello');
  const pkg1 = JSON.parse(fs.readFileSync('./package.json'));
  t.is(pkg1.version, `${pkg.version}-hello`);
});

test('full', (t) => {
  m('hello', {full: true});
  const pkg1 = JSON.parse(fs.readFileSync('./package.json'));
  t.is(pkg1.version, `hello`);
});
