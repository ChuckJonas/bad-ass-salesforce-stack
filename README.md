# B . A . S . S .

[![travis](https://travis-ci.org/ChuckJonas/bad-ass-salesforce-stack.svg?branch=master)](https://travis-ci.org/ChuckJonas/bad-ass-salesforce-stack)

***BAD ASS SALESFORCE STACK***

![bass like fish](https://raw.githubusercontent.com/ChuckJonas/bad-ass-salesforce-stack/master/images/bass-no-software.jpg)

* [react](https://facebook.github.io/react/): all the cool kids are doing it
* [redux](http://redux.js.org/): wizard state managment
* [typescript](https://www.typescriptlang.org/): business in the front, party in the back
* [antd](https://ant.design/docs/react/introduce): the most useful thing to come out of China since [the fork](https://en.wikipedia.org/wiki/Fork)
* [ts-force](https://www.npmjs.com/package/ts-force): generates massive files so you don't have toooo
* [webpack](https://webpack.github.io/): Does a lot of stuff you fully don't understand
* [sfdx-cli](https://developer.salesforce.com/tools/sfdxcli): #nosoftware

## FEATURES

* develop on localhost with Hot Module Reloading and "Real" salesforce data
* develop w/ local asset on visualforce page
* 1 step build & prompt to orgs
* works with for developer, sandbox, scratch and even production orgs
* type safey and completion when working with SF objects
* jest test framework
* setup for Redux Developer tools ([browser extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))

## SETUP

1. `clone -> npm install`
1. [authinicate 1 or more target orgs](#authentication)
1. [develop!](#development)

### ORG configuration

While you could easily use this starter for a offplatform (eg. heroku) app,
the intent if for the app to run directly on salesforce through a VF page.

#### sfdx cli

This workflow uses [sfdx-cli](https://developer.salesforce.com/tools/sfdxcli) to manage authinication and deployment of meta data to orgs.  Download and install.  You don't need to authorize a hub org unless you plan on developing against "scratch orgs".

#### predefined target orgs

The following "targets" are predefined:

* `dev`: to develop against a traditional salesforce org.  Developer or Sandbox
* `scratch` allows development against a "scratch org" using the Salesforce DX flow.  Must authenticate with a `hub org`
* `prod`: to release your app.  Can also be used to hotfix with live production data.  Don't be dumb and develop against production!

The associated sfdx org "alias" for each of these targets can be managed via config vars in `.npmrc`.

```

dev_alias=
scratch_alias=
prod_alias=

```

*NOTE: While `.npmrc` is committed here for setup convenience, you should remove it from your own source control, so each individual can manage these independantly. Failure to do so may result in people overwritting others work!*

*TIP: To see all currently authenicated orgs stored in sfdx, run `sfdx force:org:list`*

##### Authentication

For authentication existings dev/sandbox orgs use `sfdx force:auth:web:login --setdefaultusername -r http://test.salesforce.com` to start ouath process. For `prod`  targets just drop the `-r` param, `sfdx force:auth:web:login  --setdefaultusername -a your-alias`.

For new scratch orgs use: `sfdx force:org:create -a your-alias`

#### changing between orgs

To change your default target, simply run one of the following commands:

```npm
npm run make-dev-default
npm run make-scratch-default
npm run make-prod-default
```

## DEVELOPMENT

### localhost with HMR (hot module reloading)

[See HMR in action](http://i.imgur.com/j9NBbmf.gif)

Hot module reloading means that your updates will injected into your app without having to refresh the page or even lose state (in some cases)

1. [Deploy to target](#deployment) (to setup objects)
1. whitelist localhost CORS on the target ORG: `npm cors-enable`
1. `npm start`

* WARNING: if you do this on production make sure to disable cors when done with `npm cors-disable`! [why?](https://stackoverflow.com/questions/39042799/cors-localhost-as-allowed-origin-in-production)*

### dev/scratch org with local asset

1. `npm run start-remote`
1. append `?local=1` to page query string
1. browser may complain the first time.  Open up script url and tell browser to f-off

## DEPLOYMENT

```npm

npm run deploy-dev
npm run deploy-scratch
npm run deploy-prod

```

## Starting your own project

If you want to use this project as a template for your own simply:

1. `git checkout blank`
1. `rm -r -f .git` (WARNING: no going back!)
1. `git init`
1. optionally add [git remote](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
1. configure & run ts-force gen

## OTHER CONFIGURATIONS

### antd theming

You can change the antd theme less varibles by editing `/styles/ant-theme-vars.less`.  Unforuntely changes require a webpack restart to show up :(

### ts-force configuration

This project comes equiped with ts-force to allow you to access saleforce data in a typed manor.  To use ts-force, you must first generate classes for the SObjects you want to work with.

You can do this by editing `ts-force-config.json`.  Make sure to `auth: {username: ""}` is set to the target org alias you want to use to generate classes.

For more details on configuration, see ts-force [documenation](https://github.com/ChuckJonas/ts-force).


### changing localhost port

Unforuntely the port isn't currently managed from a single point and must be updated in 2 places:

1. `/config/webpack.config.json` on the `DEV_SERVER` object
1. in `/config/sfdc-cors-enable` update it on both files.

if you change the port, don't forget to update salesforce w/ `npm run cors-enable`

## OTHER USEFUL STUFF

### vscode

Higly recommend using vcode (typescript code completion, in editor terminal, etc)

plugins:

* ts-lint: green squigglies everywhere!
* sfdx plugins: gives your code completion on your `force-app` and ability to excute commands against the CLI
* autoclose tag

### helpful linkies

* [typescript deep dive](https://basarat.gitbooks.io/typescript/content/)
* [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
* [jest reference](https://facebook.github.io/jest/docs/en/getting-started.html#content)
* [sfdx cli reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
* [React-Redux: put API calls in the correct place](https://github.com/reactjs/redux/issues/291)
* [Where to Hold React Component Data: state, store, static, and this](https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00)
* [Redux: How to chain async actions](https://github.com/reactjs/redux/issues/1676)
* [a-redux-typescript-setup](http://blog.krawaller.se/posts/a-redux-typescript-setup/)

## The MIT License (MIT)

Copyright (c) 2017 Charlie Jonas <charlie@callaway.cloud>

Expanded from [react-redux-typescript-webpack-starter](https://raw.githubusercontent.com/piotrwitek/react-redux-typescript-webpack-starter)

Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io/)
