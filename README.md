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

### Install SFDC-cli
This workflow uses [sfdx-cli](https://developer.salesforce.com/tools/sfdxcli) to manage authinication and deployment of meta data to orgs.  Download and install.  You don't need to authorize a hub org unless you plan on developing against "scratch orgs".

### Clone Starter Org
1. `git clone https://github.com/ChuckJonas/bad-ass-salesforce-stack bass`
1. `cd bass`
1. `npm install`

### Authentication
To do much of anything you'll need to connect to one or more orgs. Use `sfdx force:org:list` to see a list of orgs you're already authenticated with. Connect to an existing sandbox using `sfdx force:auth:web:login -sr http://test.salesforce.com -a client_dev_sandbox`. For production orgs, just drop the `r` param, `sfdx force:auth:web:login  -sa my_prod_org`. And of course, you can create a scratch org using: `sfdx force:org:create -a test_new_feature`.

### Setup Target Orgs

Several commands take advantage of the following predefined "targets"
* `dev`: to develop against a traditional salesforce org.  Developer or Sandbox
* `scratch` allows development against a "scratch org" using the Salesforce DX flow.  Must authenticate with a `hub org`
* `prod`: to release your app.  Can also be used to hotfix with live production data.  Don't be dumb and develop against production!

You'll need to specific the associated alias each target in the `.npmrc` config file.

```

dev_alias=client_dev_sandbox
scratch_alias=test_new_feature
prod_alias=my_prod_org

```
*NOTE: Don't track changes to `.npmrc`. Each contributor will manage this configuration separately and committing it could result in another user accidentally deploying to an unintended org.

### Existing Apps
Before you can run a new app that isn't in your target org, you'll fire need to do a deploy to get the dependent salesforce metdata over there using `npm run deploy-dev`

#### Default Target

Sever commands have a default target. Use the following commands to change the defaults to the desired alias listed in `.npmrc`
```
npm run make-dev-default
npm run make-scratch-default
npm run make-prod-default
```

## DEVELOPMENT
Once your salesforce dependencies exist in your target org things get a bit more interesting.

### Run Locally with HMR (hot module reloading)
First you can host you're app on localhost and enjoy hot module reloading, and use salesforce data from the current default target. Any updates to your app will immediately show up without a pa ge refresh. Your state is also preserved in most cases.[See HMR in action](http://i.imgur.com/j9NBbmf.gif). This workflow is well suited for playing around with change without needing them to be live in your salesforce environment, i.e. if you're fixing a bug in sandbox while other users are current testing you app in different areas. By developing locally you don't have to worry about a mistake during your development impacting the users testing directly on Salesforce.

1. `npm run deploy-dev` (deploy salesforce dependencies if needed)
1. `npm run cors-enable` (whitelist localhost CORS on the default target org) DANGER (see "Danger Localhost CORS")*
1. `npm start` (start a local webserver with hot reload)

### Run Remotely With Local Assets
Another option is to run you're app in Salesforce, but use local copies of the app assets. You'll be able to make changes to the app and test inside the salesforce container page, but your changes will only show for you and not impact any other users in that environment.

1. `npm run deploy-dev` (deploy salesforce dependencies if needed)
1. `npm run cors-enable` (whitelist localhost CORS on the default target org) DANGER (see "Danger Localhost CORS")*
1. `npm run start-remote`
1. append `?local=1` to page query string
1. browser may complain the first time.  Open up script url and tell browser to f-off

### Danger Localhost CORS

* DANGER: while allowing salesforce to accept request from a localhost server is awesome for hot reloading it has security risks. It's best if you don't do this in a prodcution or org with sensitive data. But if you did, be sure to disable cors when done with `npm run cors-disable` to disable the security hole!!! [why?](https://stackoverflow.com/questions/39042799/cors-localhost-as-allowed-origin-in-production)*

### Deployment
If you have changes to salesforce metadata, or you're ready to test everything fully hosted on salesforce do a deployment to the desired target with one of the following commands

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

### Renaming Page and Resource Bundle

Before you start, You'll probably want to rename the page & resource bundle from App to something more specific. 

Renaming the page is as simple as navigating to `force-app/main/default/pages` and renaming the `.page` and `.page-meta.xml`.

To rename the Static Resource:

1. rename `force-app/main/default/staticresource/App.resource-meta.xml` 
1. in package.json, find the `copy-bundle` and rename the copy target accordingly
1. finally, just update your vf page to properly reference the new resource name


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
