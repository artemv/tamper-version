# tamper-version 
[![CircleCI](https://circleci.com/gh/artemv/tamper-version.svg?style=svg)](https://circleci.com/gh/artemv/tamper-version)

CLI utility to change package.json version. 

## Install

```
$ npm install --global tamper-version
```

## Examples
You can use it to make your application version equal to current Git hash - can be useful at CI e.g. before building Electron app' intermediate binary:
```
  yarn tamper-version "$(git rev-parse --short HEAD)" --full
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

