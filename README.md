# B . A . S . S .

[![NPM version][npm-image]][npm-url]

**_BAD ASS SALESFORCE STACK_**
![bass... like the fish](https://user-images.githubusercontent.com/5217568/61548622-56d9fe80-aa0b-11e9-9a6f-d03e2c7e4f21.png)

- [react](https://facebook.github.io/react/): all the cool kids are doing it
- [typescript](https://www.typescriptlang.org/): business in the front, party in the back
- [antd](https://ant.design/docs/react/introduce): the best thing to come out of China since [the fork](https://en.wikipedia.org/wiki/Fork)
- [ts-force](https://www.npmjs.com/package/ts-force): generates massive files so you don't have toooo
- [webpack](https://webpack.github.io/): Does a lot of stuff won't ever fully don't understand
- [sfdx-cli](https://developer.salesforce.com/tools/sfdxcli): #nosoftware

## FEATURES

- develop w/ local asset on VisualForce page
- Hot Module Reloading (HMR)!
- 1 step build & deploy to orgs
- supports developer, sandbox, scratch and production orgs
- type safety and code completion when working with SF objects
- jest test framework
- setup for debugging in [vscode chrome debugger](https://github.com/Microsoft/vscode-chrome-debug)

## GETTING STARTED

### System Requirements

Make sure you have the following installed on your machine:

- `npm`
- [sfdx-cli](https://www.npmjs.com/package/sfdx-cli): If you plan on developing against "scratch orgs", you will need to authorize a "hub".

#### Windows

You will also need the ability to execute the following bash commands: `zip`, `cp`, `mv`.

There are several options:

- A `bash` enumerator (like the one included with `git`). You may need to [install `zip` binaries](https://stackoverflow.com/questions/38782928/how-to-add-man-and-zip-to-git-bash-installation-on-windows/55749636#55749636)
- [linux](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)
- [mingw](http://www.mingw.org/wiki/Getting_Started)

You may also need to tell npm to use bash: `npm config set script-shell "C:\\Program Files\\Git\\bin\\bash.exe"`

### Install via Yeoman generator

First, install [Yeoman](http://yeoman.io) and [generator-bass](https://www.npmjs.com/package/generator-bass#installation) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-bass
```

Then generate your new project:

```bash
yo bass my-project
# ... answer questions
cd my-project
npm run deploy-dev # this will deploy code to your dev target org
```

#### Project Structure

- `app`: The react Application source Folder
- `force-app`: The Salesforce DX package. Store related metadata here. You can change this via yeoman prompt
- `config`: configurations for development, build & tests (some configuration files are in root)
- `dist`: the build directory

### Authentication

To do much of anything you'll need to connect with one or more orgs. Use `sfdx force:org:list` to see a list of orgs you're already authenticated with. Connect to an existing sandbox using `sfdx force:auth:web:login -sr [ORG_URL] -a [ALIAS]`. You can also create a scratch org using: `npm run new-scratch-org`.

### Setup "Target" Orgs

The starter supports 3 pre-defined "targets". Each target allow us to run different build & dev `scripts` depending on the context:

- `dev`: to develop against a traditional salesforce org. Developer or Sandbox.
- `scratch`: allows development against a "scratch org" using the Salesforce DX flow. Must authenticate with a "hub org"
- `prod`: to release your app. Optimizes build

Targets are set in the `.npmrc` config file. You can use either the alias or the username here:

```env
dev_alias=dev_username
scratch_alias=scratch
prod_alias=john@acme.com
```

\*NOTE: You might want to ignore `.npmrc` for your repo. Each contributor will manage this configuration separately and committing it could result in another user accidentally deploying to an unintended org. This is especially true if you use the sfdx alias over the username

## DEVELOPMENT

1. Deploy your application by running `npm run deploy-dev` or `npm run deploy-scratch`. This step needs to happen whenever the contents of `force-app` change.
2. run `npm start`
3. Enable the `Allow Insecure Localhost` setting in chrome (chrome://flags/#allow-insecure-localhost). If you don't want to enable this, or use a different browser, you can create your own self-signed certificate by following [these instructions](https://github.com/ChuckJonas/bad-ass-salesforce-stack/blob/master/config/cert/readme.md).
4. navigate to your page in salesforce: EG: `/apex/app`
5. append `?local=1` to page query string
6. Start coding. Your app will automatically update as you save changes.

[See HMR in action](http://i.imgur.com/j9NBbmf.gif)

### How it works

`webpack-dev-server` compiles and makes your app available @ `https//localhost:PORT`. It incrementally compiles your app as you make changes & [react-hot-loader](https://github.com/gaearon/react-hot-loader) allows modules to be hot reloaded without refreshing the page.

Updates will only show for you and not impact any other users in that environment (until you deploy).

You can see how this is configured by looking at [`force-app/main/default/pages/App.page`](https://github.com/ChuckJonas/bad-ass-salesforce-stack/blob/e7b7366ca2ad1e13bc9b3a1986ad6148097c2fa2/force-app/main/default/pages/App.page#L17). Basically, we just have two output panels that render conditionally based on the url param `local == 1`.

## Deployment

This starter offers 1 step build & deploy to each of the 3 targets.

```npm
npm run deploy-dev
npm run deploy-scratch
npm run deploy-prod
```

This diagram outlines the process.
![build -> deploy process](https://user-images.githubusercontent.com/5217568/38460835-58583ecc-3a7f-11e8-994d-ce8694426493.png)

## Further Configuration

### Renaming the VF Page

Renaming the page is as simple as navigating to `force-app/main/default/pages` and renaming the `app.page` and `app.page-meta.xml` to whatever you want.

_Note: You can have multiple VF pages_

### Renaming the Static Resource

1. in `package.json`, under the `config` section, update `resource`
2. optionally, update your `.gitignore` to exclude these files
3. finally, just update `$Resource.app` in the vf page to properly reference the new resource name

**NOTE: If you include other static resources in the `force-app/main/default/staticresources` folder they will get nuked by default. To prevent this, update the `copy-bundle` script **

### antd theme

You can change the antd theme less variables by editing `/styles/ant-theme-vars.less`. Unfortunately, changes here require a webpack restart to show up :(

### ts-force configuration

This project comes equipped with `ts-force` to allow you typed access to Salesforce Rest API. To use `ts-force`, you must first generate classes for the SObjects you want to work with.

You can do this by editing `ts-force-config.json`. Make sure `auth: {username: ""}` is set to the target org alias you want to use to generate classes. **_This should be the end user for the app!_**

For more details on configuration, see the [ts-force documentation](https://github.com/ChuckJonas/ts-force).

### changing localhost port

Unfortunately the port isn't currently managed from a single point and must be updated in 2 places:

1. in `.npmrc`, under the `devServerPort` section
2. in `/force-app/main/default/pages/App.Page`, update the "Local Asset" panel: `https://localhost:XXXX/app.js`.

_TIP: If you need multiple devs working on different ports, update the page to pull port from a custom setting!_

### vscode Chrome Debugger

It is possible to debug right from vscode. To do so:

1. install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
2. update `.vscode/launch.json` -> `url` to reference the url you want to debug
3. `npm start`
4. `f5` or launch `debug locally` configuration
5. you may need to Enable [Allow Insecure Localhost](chrome://flags/#allow-insecure-localhost) again if it opens in a different instance of chrome

## Upgrading to newer version of "BASS"

Overtime, this project has gotten both simpler AND objectively better.

Unfortunately upgrades are currently a very manual process. Over the many different enhancements:

- configuration files have been changed & moved around
- Low Value / High Complexity: features have been removed
- build scripts have changed
- configuration files have changed
- npm dependencies have been upgraded/added/removed

I admit, I haven't done a very good job of documenting these changes very well. My goal of keeping this everything as flexible as possible has also made it impossible to move parts of the configuration to upgradable packages.

I've tried to go back and tag `Release` to give a sense of breaking changes, but it's very incomplete.

### Things to consider when upgrading

- Most changes have happened in the following areas:
  - `package.json` (particularly the `scripts` & `config` sections)
  - `webpack.config.ts`
  - `tsconfig.json`

For these files, it's best to first identify any customization of your own and then try to merge them into the latest version from `B.A.S.S.`.

- Lots of files have been moved around. In particular:

  - many files have been moved to `config` folder.
  - `src` has been renamed to `app`

- Features & dependencies have been removed. Examples:

  - there is no longer an `local` mode as it no longer has any advantages over using `Localhost assets on salesforce`
  - Redux was removed from the core of this project
  - Replaced `awesome-typescript-loader` with babel
  - self-signed cert generation script has been removed (manual instructions are in `config/cert`)

- Runtime dependencies have been upgraded to the latest and greatest. Which likely means breaking changes in these libraries:
  - react
  - antd
  - ts-force

In most cases you should just be able to continue using your runtime library versions with the latest version of `B.A.S.S.`.

## OTHER USEFUL STUFF

### vscode

Highly recommend using vscode (typescript code completion, in editor terminal, etc).

plugins:

\*

- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): auto-set formatting options for everyone
- [TSlint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): green squigglies everywhere!
- [Salesforce Extensions for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode): gives your code completion on your `force-app` and ability to excute commands against the CLI
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): run tests on save

### helpful linkies

- [typescript deep dive](https://basarat.gitbooks.io/typescript/content/)
- [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
- [jest reference](https://facebook.github.io/jest/docs/en/getting-started.html#content)
- [sfdx cli reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
- [Where to Hold React Component Data: state, store, static, and this](https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00)
- [Redux: How to chain async actions](https://github.com/reactjs/redux/issues/1676)
- [a-redux-typescript-setup](http://blog.krawaller.se/posts/a-redux-typescript-setup/)
- [Idiomatic Redux: Thoughts on Thunks, Sagas, Abstraction, and Reusability](http://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability)

## The MIT License (MIT)

Copyright (c) 2017 Charlie Jonas <charlie@callaway.cloud>

Expanded from [react-redux-typescript-webpack-starter](https://raw.githubusercontent.com/piotrwitek/react-redux-typescript-webpack-starter)

Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io/)

[npm-image]: https://badge.fury.io/js/generator-bass.svg
[npm-url]: https://npmjs.org/package/generator-bass
