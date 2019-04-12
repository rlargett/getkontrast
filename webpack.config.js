const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const dist = path.resolve(__dirname, "dist");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
	}
}

const clientConfig = {
	entry: [
		'./src/index.js',
	],
	output: {
		path: dist,
		publicPath: '/',
		filename: '[name].[hash:5].js',
		chunkFilename: '[name].chunk.[chunkhash:5].js',
	},
	mode: process.env.NODE_ENV,

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["env", { loose: true }],
							"preact"
						],
						plugins: [
							"syntax-dynamic-import",
							"transform-class-properties",
							"transform-export-extensions",
							"transform-object-rest-spread"
						]
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: isDev
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('postcss-import'),
								require('tailwindcss')('./tailwind.js'),
								require('postcss-preset-env')({
									stage: 3,
									features: {
										'nesting-rules': true
									},
									browsers: 'last 2 versions',
								}),
							].concat( isProd? [
								require('@fullhuman/postcss-purgecss')({
									content: [
										"./src/index.html",
										"./src/components/**/*.js",
										"./src/routes/**/*.js",
									],
									extractors: [
										{
											extractor: TailwindExtractor,
											extensions: ["html", "js"]
										}
									]
								}),
								require('cssnano')(),
							]:[]),
						}
					}
				],
			},
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: isDev ? '[name].css' : '[name].[contenthash:5].css',
			chunkFilename: isDev ? '[id].css' : '[id].[contenthash:5].css',
		}),

		new CopyWebpackPlugin([
			{ from: './src/static/', to: dist },
			// { from: './src/assets/', to: dist },
			// { from: './project-site/public/blog/', to: dist+'/blog' },
		]),

		new HtmlWebpackPlugin({
			minify: isProd && {
				collapseWhitespace: true,
				removeScriptTypeAttributes: true,
				removeRedundantAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeComments: true
			},
			filename: 'index.html',
			template: './src/index.html',
			title: 'Kontrast - WCAG Contrast Checker',
			lang: 'en-US',
		}),

		new CleanWebpackPlugin([
			isDev?'':dist,
		]),
	].concat(isProd?[
		new PrerenderSPAPlugin({
			staticDir: dist,
			routes: [ '/' ],
			postProcessHtml: function (context) {
				return context.html.replace(
					// strip all script tags
					/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i,
					'' 
				)
			},

			// renderer: new Renderer({
			//  captureAfterDocumentEvent: 'render-done-event',
			//  renderAfterElementExists: '#app',
			// })
		}),
	]:[]),

	optimization: {
		noEmitOnErrors: true,

		minimizer: [
			new UglifyJsPlugin({
				parallel: 2,
				uglifyOptions: {
					mangle: true,
					compress: {
						drop_console: true,
					},
				},
			})
		],

		splitChunks: {
			chunks: 'all',
		}
	},

	devServer: {
		contentBase: dist,
		publicPath: '/',
		historyApiFallback: true,
		// stats: "minimal" 
	},

	resolve: {
		extensions: ['.jsx', '.js', '.css'],
		alias: {
			'~': path.resolve(__dirname, "src/"),
			Components: path.resolve(__dirname, "src/components"),
			Routes: path.resolve(__dirname, "src/routes"),
			Style: path.resolve(__dirname, "src/style"),
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
}

// console.log(
// 	encodeURIComponent(JSON.stringify( {
// 		string: true,
// 		params: { url: '/' }
// 	}
// 	))
// );

module.exports = clientConfig;
