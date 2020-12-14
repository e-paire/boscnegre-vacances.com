import path from "path"

import webpack from "webpack"
import CopyWebpackPlugin from "copy-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import {phenomicLoader} from "phenomic"
import PhenomicLoaderFeedWebpackPlugin from "phenomic/lib/loader-feed-webpack-plugin"
import PhenomicLoaderSitemapWebpackPlugin from "phenomic/lib/loader-sitemap-webpack-plugin"

import {mdifyObject, mdifyText} from "./src/utils/markdown"

import pkg from "./package.json"

export default (config = {}) => {
  const postcssPluginFile = require.resolve("./postcss.config.js")
  const postcssPlugins = (webpackInstance) => {
    webpackInstance.addDependency(postcssPluginFile)
    delete require.cache[postcssPluginFile]
    // eslint-disable-next-line import/no-dynamic-require
    return require(postcssPluginFile)(config)
  }

  return {
    ...config.dev && {
      devtool: "#cheap-module-eval-source-map",
    },
    module: {
      noParse: /\.min\.js/,
      loaders: [
        {
          test: /\.(md|markdown)$/,
          loader: phenomicLoader,
          exclude: /node_modules/,
          query: {
            context: path.join(__dirname, config.source),
            plugins: [
              require("phenomic/lib/loader-plugin-init-head-property-from-config").default,
              require("phenomic/lib/loader-plugin-init-head-property-from-content").default,
              require("phenomic/lib/loader-plugin-init-body-property-from-content").default,
              ({result}) => {
                return {
                  ...result,
                  head: mdifyObject(result.head),
                  body: mdifyText(result.body),
                }
              }
            ],
          },
        },
        {
          test: /\.json$/,
          loader: "json-loader",
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "src"),
          ],
          loaders: [
            "babel-loader?cacheDirectory",
            "eslint-loader" + (config.dev ? "?emitWarning" : ""),
          ],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                query: {
                  modules: true,
                  localIdentName: (
                   config.production
                   ? "[hash:base64:5]"
                   : "[path][name]--[local]--[hash:base64:5]"
                 ),
                },
              },
              {
                loader: "postcss-loader",
              },
            ],
          }),
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          exclude: path.resolve(__dirname, "src"),
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
          }),
        },
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?)/,
          loader: "file-loader",
          query: {
            name: "assets/media/[name].[ext]",
            context: path.join(__dirname, config.source),
          }
        },
        {
          test: /\.yml$/,
          loader: "json-loader!yaml-loader",
        },
        {
          test: /\.modernizrrc.js$/,
          loader: "modernizr-loader"
        },
        {
          test: /\.modernizrrc(\.json)?$/,
          loader: "modernizr-loader!json-loader"
        }
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: postcssPlugins,
          context: __dirname,
        },
      }),
      new PhenomicLoaderFeedWebpackPlugin({
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          "feed.xml": {
            collectionOptions: {
              filter: {layout: "Post"},
              sort: "date",
              reverse: true,
              limit: 20,
            },
          },
        },
      }),
      new PhenomicLoaderSitemapWebpackPlugin({
        site_url: pkg.homepage,
        collectionOptions: {
          filter: (c) => typeof (c.isInSitemap) === "undefined" || c.isInSitemap === true,
          sort: "__url",
        },
      }),
      new ExtractTextPlugin({
        filename: "assets/css/[name].[hash].css",
        disable: config.dev,
      }),
      new CopyWebpackPlugin([
        {from: "_uploads", to: "uploads"},
        {from: "favicons"},
        {from: "_redirects"}, // Handle server-side redirections on Netlify
      ]),
      ...config.production && [
        new webpack.optimize.UglifyJsPlugin(
          {compress: {warnings: false}}
        ),
      ],
    ],
    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "assets/js/[name].[hash].js",
    },

    resolve: {
      extensions: [".js", ".json"],
      alias: {
        modernizr$: path.resolve(__dirname, ".modernizrrc"),
        components: path.resolve(__dirname, "src/components/"),
        layouts: path.resolve(__dirname, "src/layouts/"),
        utils: path.resolve(__dirname, "src/utils/"),
        styles: path.resolve(__dirname, "src/styles/"),
        translations: path.resolve(__dirname, "src/translations/"),
      }
    },
  }
}
