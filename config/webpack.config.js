const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
};


//for ant overrides
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(PATHS.root, './ant-theme-vars.less'), 'utf8'));


const DEV_SERVER = {
  hot: true,
  hotOnly: true,
  historyApiFallback: true,
  overlay: true,
  // stats: 'verbose',
  // proxy: {
  //   '/api': 'http://localhost:3000'
  // },
};

module.exports = (env = {}) => {
  console.log({ env });
  const isBuild = !!env.build;
  const isDev = !env.build;
  const isSourceMap = !!env.sourceMap || isDev;

  if(isDev){
    var child_process = require('child_process');
    var orgInfo = JSON.parse(child_process.execSync("sfdx force:org:display --json").toString('utf8'));
  }

  return {
    cache: true,
    devtool: isDev ? 'eval-source-map' : 'source-map',
    devServer: DEV_SERVER,

    context: PATHS.root,

    entry: {
      app: [
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/index.tsx',
      ],
    },
    output: {
      path: PATHS.dist,
      filename: isDev ? '[name].js' : '[name].[hash].js',
      publicPath: '/',
      // chunkFilename: '[id].chunk.js',
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
          use: (env.awesome ?
            [
              { loader: 'react-hot-loader/webpack' },
              {
                loader: 'awesome-typescript-loader',
                options: {
                  useBabel: true,
                  transpileOnly: true,
                  useTranspileModule: false,
                  sourceMap: isSourceMap,
                },
              },
            ] : [
              { loader: 'react-hot-loader/webpack' },
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  compilerOptions: {
                    'sourceMap': isSourceMap,
                    'target': isDev ? 'es2015' : 'es5',
                    'isolatedModules': true,
                    'noEmitOnError': false,
                  },
                },
              },
            ]
          ),
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
        // // css
        // {
        //   test: /\.css$/,
        //   include: [PATHS.STYLES],
        //   loader: ExtractTextPlugin.extract([
        //     'css-loader?{modules: false}',
        //     'postcss-loader',
        //   ]),
        // },
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
      new DashboardPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        },
      }),
      ...(isDev ? [
        new webpack.HotModuleReplacementPlugin({
          // multiStep: true, // better performance with many files
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin( //inject global
            {
                '__ACCESSTOKEN__': JSON.stringify(orgInfo.result.accessToken),
                '__RESTHOST__': JSON.stringify('https://dry-taiga-29622.herokuapp.com')
            }),
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
