# tamper-version 
[![CircleCI](https://circleci.com/gh/artemv/tamper-version.svg?style=svg)](https://circleci.com/gh/artemv/tamper-version)

CLI utility to change package.json version. 

## Install

```
$ npm install --global tamper-version
```

## Usage

```
$ tamper-version --help

  Usage
    $ tamper-version <suffix> [--full]

  Examples
    $ tamper-version binaries
  This will add "-binaries" suffix to package.json' version, so if it was 1.0.0 it will become 1.0.0-binaries.

    $ tamper-version `cat .version` --full
  This will put contents of .version file to package.json' version field.
  Prior to changing package.json will be saved to package.json.bak.

```

## License

MIT © [Artem Vasiliev](https://github.com/artemv)

