const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  styles: path.resolve(__dirname, '../src/styles'),
};


//for ant overrides
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(PATHS.styles, './ant-theme-vars.less'), 'utf8'));


const DEV_SERVER = {
  historyApiFallback: true,
  overlay: true,
  port:8080 //should match ./config/sfdc-cors-enable
};

module.exports = (env = {}) => {
  console.log({ env });
  const isBuild = !!env.build;
  const isDev = !env.build;
  const isLocal = env.local;
  const isSourceMap = !!env.sourceMap || isDev;

  let orgInfo;
  let instanceUrl;

  let GLOBAL_DEFINES =
  {
    'process.env': {
      NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
    }
  }

  //Setup varibles for communications with Salesforce locally
  if (isLocal) {
    //get access token from sfdx
    var child_process = require('child_process');
    orgInfo = JSON.parse(child_process.execSync("sfdx force:org:display --json").toString('utf8'));
    console.log(`Running as: ${orgInfo.result.username}`);
    GLOBAL_DEFINES.__ACCESSTOKEN__ = JSON.stringify(orgInfo.result.accessToken);
    GLOBAL_DEFINES.__RESTHOST__ = JSON.stringify(orgInfo.result.instanceUrl);
    DEV_SERVER.hot = true;
    DEV_SERVER.hotOnly = true;
  }

  return {
    cache: true,
    devtool: isDev ? 'eval-source-map' : 'source-map',
    devServer: DEV_SERVER,

    context: PATHS.root,

    entry: {
      app: [
        'babel-polyfill',
        './src/index.tsx',
      ],
    },
    output: {
      path: PATHS.dist,
      filename: '[name].js',
      publicPath: '/',
    },

    resolve: {
      alias: { '@src': PATHS.src },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['src', 'node_modules'],
    },

    // externals: {
    // },

    module: {
      rules: [
        // typescript
        {
          test: /\.(ts|tsx)$/,
          include: PATHS.src,
          use:
          [
            {
              loader: 'awesome-typescript-loader',
              options: {
                useBabel: true,
                transpileOnly: true,
                useTranspileModule: false,
                sourceMap: isSourceMap,
              },
            },
          ]
        },
        // css
        {
          test: /\.css$/,
          include: PATHS.styles,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
          ]
        },
        //antd
        {
          test: /\.less$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            {
              loader: "less-loader",
              options: {
                modifyVars: themeVariables
              }
            }
          ]
        },
        // json
        {
          test: /\.json$/,
          include: [PATHS.src],
          use: { loader: 'json-loader' },
        },
        // // less
        // {
        //   test: /\.less$/,
        //   include: [PATHS.STYLES],
        //   loader: ExtractTextPlugin.extract([
        //     'css-loader?{modules: false}',
        //     'less-loader',
        //   ]),
        // },
        // // images
        // {
        //   test: /\.(jpg|jpeg|png|gif|svg)$/,
        //   include: [PATHS.IMAGES],
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       name: 'images/[hash].[ext]',
        //       limit: 1000, // inline file data until size
        //     },
        //   },
        // },
        // // fonts
        // {
        //   test: /\.(woff|woff2|ttf|eot)$/,
        //   include: [
        //     PATHS.ASSETS,
        //   ],
        //   use: {
        //     loader: 'file-loader',
        //     options: {
        //       name: 'fonts/[name].[hash].[ext]',
        //     },
        //   },
        // },
      ],
    },

    plugins: [
      ...(isDev ? [
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin({
          // multiStep: true, // better performance with many files
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin( //inject global
          GLOBAL_DEFINES),
      ] : []),
      ...(isBuild ? [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          compress: {
            screw_ie8: true
          },
          comments: false,
          sourceMap: isSourceMap,
        }),
        new HtmlWebpackPlugin({
          template: './index.html',
        }),
      ] : []),
    ]
  };

};
