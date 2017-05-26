Binmas Website Static
=========================

## Install
### Requirements Node & Gulp 4

```bash
npm run init
```


### Tasks

#### Launch it

This is the default task.

```bash
npm run dev
```

#### Build

When you are happy with your changes, run:

```bash
npm run prod
```

#### Tests tasks

Quick tests and stats with:

```bash
# w3c validation
gulp testMarkup

# mocha tests (written in test folder)
gulp testScripts

# PageSpeed Insights reporter for mobile and desktop
gulp testPsi
```

#### Clean it

Clean dist dir (except static folder) and clear all caches (sass cache, gulp cache)

```bash
gulp clean
```
#### Help

This command will give you a list of all tasks available and their description.

```bash
gulp --tasks
```
