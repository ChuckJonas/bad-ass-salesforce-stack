# React / Redux / Typescript / Webpack2 - App Starter
## _Powered by Webpack2 optimized for performance_

## Features:
- Ultra performance  
- Webpack 2 - simple one-file config for both dev & production  
- Separate app (source code) and vendor bundle  
- Easy switch between `ts-loader` and `awesome-typescript-loader` for comparison (`dev` and `dev2` npm scripts)  
- React Hot Loader 3  
- Webpack Dashboard  

![](https://raw.githubusercontent.com/piotrwitek/react-redux-typescript-webpack-starter/docs/images/dev.gif)

![](https://raw.githubusercontent.com/piotrwitek/react-redux-typescript-webpack-starter/docs/images/build.gif)

---

## Installation
- project optimized to use yarn
```
// Clone repo
git clone https://github.com/piotrwitek/react-redux-typescript-webpack-starter

// Install dependencies
npm install

// Run development server with react hot-reload
npm run dev (ts-loader)
or
npm run dev2 (awesome-typescript-loader)
```

---

## CLI Commands

#### - Development

`npm run dev` - start dev-server with hot-reload (ts-loader)

`npm run dev2` - start dev-server with hot-reload (awesome-typescript-loader)

#### - Type checking

`npm run tsc` - entire project type-check

`npm run tsc:watch` - fast incremental type-checking in watch mode

#### - Production Bundling (`dist/` folder)

~~`npm run prod` - start local dev server in `dist/` folder running production bundle~~

`npm run clean` - clean dist

`npm run build` - build dist bundle

#### - Utility & Git Hooks

`npm run reinstall` - reinstall all dependencies (useful when switching branch) (note: use `reinstall:win` on Windows)

`npm run lint` - run linter (tslint)

`npm run test` - run tests with jest runner

`npm run test:update` - update jest snapshots

`npm run precommit` - pre commit git hook - linter

`npm run prepush` - pre push git hook - linter, tests and check types

#### - Deployment

~~`npm run deploy` - commit and push all changes found in `/dist` folder to "gh-pages" branch~~

---

## The MIT License (MIT)

Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io/)
