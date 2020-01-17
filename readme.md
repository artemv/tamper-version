# tamper-version 
[![CircleCI](https://circleci.com/gh/artemv/tamper-version.svg?style=svg)](https://circleci.com/gh/artemv/tamper-version)

CLI utility to change package.json version. 

## Motivation
This can be helpful e.g. if you want to publish Electron built binaries to Github after the release tag was created by semantic-release. Electron builder doesn't work if the relevant tag is existing and it's non-draft, so a simple workaround can be to add a "-binaries" suffix to project version and then make electron-builder create a new tag for it.  

## Install

```
$ npm install --global tamper-version
```

## Usage

```
$ tamper-version --help

    Usage
      $ tamper-version <suffix> 

    Example
      $ tamper-version binaries
    This will add "-binaries" suffix to package.json' version, so if it was 1.0.0 it will become 1.0.0-binaries.

```

## License

MIT © [Artem Vasiliev](https://github.com/artemv)

