# B.A.S.S.

BAD ASS SALESFORCE STACK

* [react](https://facebook.github.io/react/): all the cool kids are doing it
* [redux](http://redux.js.org/): wizard state managment
* [typescript](https://www.typescriptlang.org/): business in the front, party in the back
* [antd](https://ant.design/docs/react/introduce): the most useful thing to come out of China since [the fork](https://en.wikipedia.org/wiki/Fork)
* [ts-force](https://www.npmjs.com/package/ts-force): generates massive files so you don't have toooo
* [webpack](https://webpack.github.io/): Does a lot of stuff you fully don't understand
* [sfdx-cli](https://developer.salesforce.com/tools/sfdxcli): #nosoftware

## Features

* Local development with "real" salesforce data
* Hot module reloading
* 1 step build & prompt to orgs
* works with for developer, sandbox, scratch and even production orgs
* buildscripts for predefined targets
* type safey and completion when working with SF objects

## Presetup

### sfdx cli

This workflow is setup to leverage sfdx cli to manage authinication and deployment of meta data to orgs.  Download and install.  You don't need to authorize a hub org unless you plan on developing against "scratch orgs".

### CORS proxy

If you want to run this app locally you need to a CORS proxy to allow for communicaiton with Salesforce from `localhost`.  The [sf-cors-proxy](https://github.com/jamesward/sf-cors-proxy) make this task trival.  Only takes a couple minutes to setup if you already have [heroku cli](https://devcenter.heroku.com/articles/heroku-cli).

You can use the same CORS proxy across all your projects and it can be shared with your team.  Just keep in mind that every request going through has an access token that could be logged.  Keep it secure.


## Setup

1. `clone -> npm install`
1. (optional) Set CORS proxy url
    * open `config/webpack.config.json`
    * locate `CORS_PROXY_URL`
    * set it to the URL of the proxy you setup (see instructions above)
1. [configure 1 or more target orgs](#org-configuration)
1. `npm start` for local development or `npm run deploy-dev`|`npm run deploy-scratch` to push the app up to development enviorment

### ORG configuration

While you could easily use this starter for a offplatform (eg. heroku) app, the intent if for the app to run directly on salesforce through a VF page.

#### predefined target orgs

The following aliases are predefined:

    * `dev`: to develop against a traditional salesforce org.  Developer or Sandbox
    * `scratch` allows development against a "scratch org" using the Salesforce DX flow.  Must authinciate a `hub org`
    * `prod`: to release your app.  Can also be used to hotfix with live production data.  Don't be dumb and develop against production!

For `dev` and `prod` you can authinicate using `sfdx force:auth:web:login -a [dev|prod] --setdefaultusername`.

For scratch orgs use: `run new-scratch-org`

*Note: if you are trying to connect to a sandbox, make sure to set the instance url with the `-r` arg*

#### changing between orgs

To change your default target, simply run one of the following commands:

```npm
npm run make-dev-default
npm run make-scratch-default
npm run make-prod-default
```

### ts-force configuration

This project comes equiped with ts-force to allow you to access saleforce data in a typed manor.  To use ts-force, you must first generate classes for the SObjects you want to work with.

You can do this by editing `ts-force-config.json`.  Make sure to `auth: {username: ""}` is set to the target org alias you want to use to generate classes.

For more details on configuration, see ts-force [documenation](https://github.com/ChuckJonas/ts-force).


## The MIT License (MIT)

Copyright (c) 2017 Charlie Jonas <charlie@callaway.cloud>

Expanded from [react-redux-typescript-webpack-starter](https://raw.githubusercontent.com/piotrwitek/react-redux-typescript-webpack-starter)

Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io/)
