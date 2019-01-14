# B . A . S . S .

***BAD ASS SALESFORCE STACK***

![bass like the fish](https://user-images.githubusercontent.com/5217568/38460726-edbf16aa-3a7c-11e8-80f9-58e109e652cf.jpg)

* [react](https://facebook.github.io/react/): all the cool kids are doing it
* [typescript](https://www.typescriptlang.org/): business in the front, party in the back
* [antd](https://ant.design/docs/react/introduce): the most useful thing to come out of China since [the fork](https://en.wikipedia.org/wiki/Fork)
* [ts-force](https://www.npmjs.com/package/ts-force): generates massive files so you don't have toooo
* [webpack](https://webpack.github.io/): Does a lot of stuff you fully don't understand
* [sfdx-cli](https://developer.salesforce.com/tools/sfdxcli): #nosoftware

## FEATURES

* develop w/ local asset on VisualForce page
* develop on localhost (REST API only)
* Hot Module Reloading (HMR)!
* 1 step build & deploy to orgs
* works with for developer, sandbox, scratch and even production orgs
* type safety and completion when working with SF objects
* jest test framework
* setup for Redux Developer tools ([browser extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))
* setup for debugging in [vscode chrome debugger](https://github.com/Microsoft/vscode-chrome-debug)

## GETTING STARTED

*NOTICE*: This build is intended for users of OSX (or other linux based system).  However, it wouldn't be too hard to port the setup and build commands to windows

### Install SFDC-cli

This workflow uses [sfdx-cli](https://www.npmjs.com/package/sfdx-cli) to manage authentication and deployment of meta data to orgs.   Run `npm install --global sfdx-cli`.  You don't need to authorize a hub org unless you plan on developing against "scratch orgs".

### Clone Starter

1. `git clone https://github.com/ChuckJonas/bad-ass-salesforce-stack bass`
2. `cd bass`
3. optional: `git checkout` the `redux-example` or `react-example branches`
4. `npm install`

### Authentication

To do much of anything you'll need to connect with one or more orgs. Use `sfdx force:org:list` to see a list of orgs you're already authenticated with. Connect to an existing sandbox using `sfdx force:auth:web:login -sr [ORG_URL] -a [ALIAS]`. You can also create a scratch org using: `npm run new-scratch-org`.

### Setup Target Orgs

Several commands take advantage of the following predefined "targets"

* `dev`: to develop against a traditional salesforce org.  Developer or Sandbox
* `scratch`: allows development against a "scratch org" using the Salesforce DX flow.  Must authenticate with a `hub org`
* `prod`: to release your app.  Can also be used to hotfix with live production data.  Don't be dumb and develop against production!

You'll need to specific the associated alias each target in the `.npmrc` config file.  You can use either the alias or the username here.

```env
dev_alias=dev_username
scratch_alias=test_new_feature
prod_alias=prod_user
```

*NOTE: You might want to ignore `.npmrc` for your repo. Each contributor will manage this configuration separately and committing it could result in another user accidentally deploying to an unintended org.  This is especially true if you use the sfdx alias over the username

#### Default Target

While `deploy` scripts are env specific, some commands (eg: `npm start-local`, `npm enable-cors`) use the default DX user. You can use following scripts to switch the default user to the desired alias listed in `.npmrc`

```bash
npm run make-dev-default
npm run make-scratch-default
npm run make-prod-default
```

## DEVELOPMENT

### Salesforce w/ Local Assets

The most flexible development setup is to use `localhost` to serve assets on your VF page in salesforce. You'll be able to make changes from your IDE and salesforce will automatically update on the fly.  Updates will only show for you and not impact any other users in that environment.  You will not be limited from using any salesforce features you might need.

1. Deploy your application (step needs to happen whenever the contents of `force-app` change)
2. `npm run create-dev-crt`: this creates certificate to use with our dev server (you only need to do this once).
3. install the newly created cert `config/cert/server.crt` in [keychain and set trust to "Always"](https://www.youtube.com/watch?v=TGrX8XgSuZ4)
4. `npm run start-sfdc` (or just `npm start`)
5. navigate to your page EG: `/apex/app`
6. append `?local=1` to page query string

*NOTE:*: If the `create-dev-crt` cmd does not run (for example if you don't have `openssl` installed), then you can by-pass this step by removing `--cert ./config/cert/server.crt --key ./config/cert/server.key` from the `start-sfdc` command (+ skip step 3).  However, you will have to manually tell chrome to trust the served resources.

#### How it works

You can see how this is configured by looking at `force-app/main/default/pages/App.page`.  Basically, we have two output panels that render conditionally based on the url param `local == 1`.

### Localhost

This starter is also configured with the ability to run completely on `localhost`.  While there are many benefits to local dev, **you will be limited to communicating with salesforce ONLY through the REST API** (`@RemoteAction`, Custom Controllers, Streaming API, etc will not run on locally host).

1. `npm run cors-enable` (only need to run once. whitelist localhost CORS on the default target org). See Warning[^1]
2. `npm run start-local` (start a local webserver with hot reload)

Localhost dev is really helpful for prototyping and even full applications depending on the requirements.  If you are only using the REST API and your `App.page` doesn't change often, this might be the more convenient development setup.

#### How it works

- webpack will use SFDX to grab a session token & host from your current "default user" (can be changed via `npm run make-[target]-default`) and inject it into the global scope
- the `config/index.html` file will act like the VF pages (this always needs to reflect your setup in `App.page`)
  - if you inject any other variables into the global scope, you will also need to include these

[^1] DANGER: while allowing salesforce to accept request from a localhost server is awesome for hot reloading it has security risks. It's best if you don't do this in a production or org with sensitive data. But if you did, be sure to disable cors when done with `npm run cors-disable` to disable the security hole!!! [why?](https://stackoverflow.com/questions/39042799/cors-localhost-as-allowed-origin-in-production)*

## Hot Module Reloading (HMR)

Regardless of which development setup you use, you can take advantage of Hot Module Reloading (HMR), which allows updates to show up within seconds without ever having to refresh the page. Your application state is even also preserved in many cases. [See HMR in action](http://i.imgur.com/j9NBbmf.gif).

## Deployment

This starter offers 1 step build & deploy to each of the 3 targets.

```npm
npm run deploy-dev
npm run deploy-scratch
npm run deploy-prod
```

This diagram outlines the process.
![build -> deploy process](https://user-images.githubusercontent.com/5217568/38460835-58583ecc-3a7f-11e8-994d-ce8694426493.png)

## Starting your own project

If you want to use this project as a template for your own simply:

1. `rm -r -f .git` (WARNING: no going back!)
2. `git init`
3. optionally add [git remote](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
4. configure & `npm run ts-force-generate`
5. rename page & resource bundle (optional)
6. remove example files

### Renaming Page and Resource Bundle

Before you start your own project, you'll probably want to rename the page & resource bundle from App to something more specific.

Renaming the page is as simple as navigating to `force-app/main/default/pages` and renaming the `.page` and `.page-meta.xml`.

#### To rename the generated Static Resource

1. in `package.json` update `resource` under `config` section
2. optionally, update your `.gitignore` to exclude these files
3. finally, just update your vf page to properly reference the new resource name

**NOTE: If you include other static resources in the `force-app/main/default/staticresources` folder they will get nuked by default. To prevent this, update the `copy-bundle` script **

## OTHER CONFIGURATIONS

### antd theming

You can change the antd theme less variables by editing `/styles/ant-theme-vars.less`.  Unfortunately changes require a webpack restart to show up :(

### ts-force configuration

This project comes equipped with ts-force to allow you to access Salesforce data in a typed manor.  To use ts-force, you must first generate classes for the SObjects you want to work with.

You can do this by editing `ts-force-config.json`.  Make sure `auth: {username: ""}` is set to the target org alias you want to use to generate classes. ***This should be the end user for the app!***

For more details on configuration, see the [ts-force documentation](https://github.com/ChuckJonas/ts-force).

### changing localhost port

Unfortunately the port isn't currently managed from a single point and must be updated in 2 places:

1. In `/config/webpack.config.json` update the `PORT` constant
2. In `/config/sfdc-cors-enable` update it on both files
3. in `/force-app/main/default/pages/App.Page`, update the "Local Asset" panel

```html
    <apex:outputPanel layout="none" rendered="{!$CurrentPage.parameters.local == '1'}">
        <script src="https://localhost:8080/vendors.js" ></script>
        <script src="https://localhost:8080/app.js" ></script>
    </apex:outputPanel>
```

if you change the port, don't forget to update salesforce w/ `npm run cors-enable`

## OTHER USEFUL STUFF

### vscode

Highly recommend using vscode (typescript code completion, in editor terminal, etc).

plugins:

* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Allows debugging in vscode
* [TSlint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): green squigglies everywhere!
* [Salesforce Extensions for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode): gives your code completion on your `force-app` and ability to excute commands against the CLI
* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
* [Typescript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero): auto-imports, etc
* [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): run tests on save
* [Webpack Dashboard App](https://www.google.com/search?q=webpack+dashboard+electron&oq=webpack+dashboard+e&aqs=chrome.1.69i57j0j69i60l3j0.6080j1j7&sourceid=chrome&ie=UTF-8): nice app for you webpack-dev-server status

### helpful linkies

* [typescript deep dive](https://basarat.gitbooks.io/typescript/content/)
* [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
* [jest reference](https://facebook.github.io/jest/docs/en/getting-started.html#content)
* [sfdx cli reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
* [React-Redux: put API calls in the correct place](https://github.com/reactjs/redux/issues/291)
* [Where to Hold React Component Data: state, store, static, and this](https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00)
* [Redux: How to chain async actions](https://github.com/reactjs/redux/issues/1676)
* [a-redux-typescript-setup](http://blog.krawaller.se/posts/a-redux-typescript-setup/)
* [Idiomatic Redux: Thoughts on Thunks, Sagas, Abstraction, and Reusability](http://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability)

## The MIT License (MIT)

Copyright (c) 2017 Charlie Jonas <charlie@callaway.cloud>

Expanded from [react-redux-typescript-webpack-starter](https://raw.githubusercontent.com/piotrwitek/react-redux-typescript-webpack-starter)

Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io/)
