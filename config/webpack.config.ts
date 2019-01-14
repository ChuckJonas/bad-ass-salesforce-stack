import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import * as fs from 'fs';

const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src'),
  assets: path.resolve(__dirname, '../src/assets'),
  dist: path.resolve(__dirname, '../dist'),
  styles: path.resolve(__dirname, '../src/styles'),
  localTemplate: path.resolve(__dirname, '../config/index.html'),
};

// for ant overrides

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(PATHS.styles, './ant-theme-vars.less'), 'utf8'));

module.exports = (env: any = {}) => {
  const PORT = env.port || 8080; // should match ./config/sfdc-cors-enable
  const resourceName = env.resource || 'app';
  const isBuild = !!env.build;
  const isLocal = env.local;

  console.log('isBuild:', isBuild, 'isLocal:', isLocal);

  const mode = isBuild ? 'production' : 'development';

  const GLOBAL_DEFINES: any = {
    'process.env': {
      NODE_ENV: JSON.stringify(mode),
    },
  };

  const DEV_SERVER: webpackDevServer.Configuration = {
    historyApiFallback: true,
    overlay: true,
    port: PORT,
    headers: { // enable CORS
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    disableHostCheck: true,
  };

  // Setup variables for communications with Salesforce locally
  if (isLocal) {
    // get access token from sfdx
    const child_process = require('child_process');
    const orgInfo = JSON.parse(child_process.execSync('sfdx force:org:display --json').toString('utf8'));
    console.log(`Running on ${orgInfo.result.instanceUrl} as ${orgInfo.result.username}`);
    GLOBAL_DEFINES.__ACCESSTOKEN__ = JSON.stringify(orgInfo.result.accessToken);
    GLOBAL_DEFINES.__RESTHOST__ = JSON.stringify(orgInfo.result.instanceUrl);
  }

  const config: webpack.Configuration = {
    mode,
    cache: true,
    devtool: isBuild ? 'source-map' : 'eval-source-map',
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
      publicPath: (isBuild ? `/resource/${resourceName}/dist/` : isLocal ? '/' : `https://localhost:${PORT}/`), // setup for HMR when hosted with salesforce
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
                sourceMap: true,
              },
            },
          ],
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
            {
              loader: 'less-loader',
              options: {
                modifyVars: themeVariables,
                javascriptEnabled: true,
              },
            },
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
          test: /\.(jpg|jpeg|png|gif|svg)$/,
          include: [PATHS.assets],
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][hash].[ext]',
            },
          },
        },
        // fonts
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          include: [
            PATHS.assets,
          ],
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash].[ext]',
            },
          },
        },
      ],
    },

    plugins: [
      ...[
        new webpack.DefinePlugin(GLOBAL_DEFINES),
      ],
      ...(!isBuild ? [
        new DashboardPlugin(),
        new webpack.NamedModulesPlugin(),
      ] : []),
      ...(isLocal ? [
        new HtmlWebpackPlugin({
          template: PATHS.localTemplate,
        }),
      ] : []),
      ...(env.analyze ? [
        new BundleAnalyzerPlugin(),
      ] : []),
    ],
  };

  return config;

};
