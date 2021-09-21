import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import * as fs from 'fs';
import lessToJs from 'less-vars-to-js';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/** Setup Paths */
const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'app');
const PATHS = {
  root,
  src,
  index: path.resolve(src, 'index.tsx'),
  assets: path.resolve(src, 'assets'),
  styles: path.resolve(src, 'styles'),
  dist: path.resolve(root, 'dist'),
};

// for ant style overrides
const themeVariables = lessToJs(fs.readFileSync(path.join(PATHS.styles, './ant-theme-vars.less'), 'utf8'));

module.exports = (env: any = {}) => {
  const PORT = parseInt(env.port) || 8080;
  const resourceName = env.resource || 'app';
  const isBuild = !!env.build; // build vs dev-server
  const isProd = !!env.prod;   // for Prod ENV optimizations

  console.log(`Resource Name: ${resourceName} | isBuild: ${isBuild} | isProd: ${isProd}`);

  const mode = isProd ? 'production' : 'development';

  // add things here to put in the global namespace
  const GLOBAL_DEFINES: any = {
    'process.env': {
      NODE_ENV: JSON.stringify(mode),
    },
  };

  const devServer: webpackDevServer.Configuration = {
    historyApiFallback: true,
    port: PORT,
    headers: { // enable CORS
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  };

  const config: webpack.Configuration = {
    mode,
    cache: true,
    devtool: isBuild ? 'source-map' : 'source-map',
    context: PATHS.root,
    entry: {
      app: [
        'babel-polyfill',
        PATHS.index,
      ],
    },
    output: {
      path: PATHS.dist,
      filename: '[name].js',
      publicPath: (
        isBuild ? `/resource/${resourceName}/dist/`
        : `https://localhost:${PORT}/` // setup for HMR when hosted with salesforce
      ),
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
            },
        },
      },
    },

    resolve: {
      alias: { '@src': PATHS.src },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['src', 'node_modules'],
    },

    // externals: {
    // },

    /*** LOADERS ***/
    module: {
      rules: [
        // typescript
        {
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: require('./babelrc.json'),
        },
        // css
        {
          test: /\.css$/,
          include: PATHS.styles,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
        // antd
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {loader: 'less-loader',
              options: {
              lessOptions:{
              javascriptEnabled: true,
              modifyVars: themeVariables,
              }
          }},
          ],
        },
        // json
        {
          test: /\.json$/,
          include: [PATHS.src],
          use: { loader: 'json-loader' },
        },
        // images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          include: [PATHS.assets],
        },
        // fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          include: [PATHS.assets],
        },
      ],
    },

    /*** PLUGIN ***/
    plugins: [
      ...[
        new webpack.DefinePlugin(GLOBAL_DEFINES),
      ],
      ...(isProd ? [
        // put production optimization plugins here
      ] : []),
      ...(env.analyze ? [
        new BundleAnalyzerPlugin(),
      ] : []),
    ],
  };

  return config;

};
