const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const doAnalysis = ({ analyze }) => {
  if (analyze) {
    return [new BundleAnalyzerPlugin()];
  }
  return [];
};

const setMode = ({ mode }) => {
  process.env.NODE_ENV = mode || 'development';
	process.env.BABEL_ENV = process.env.NODE_ENV;
  return mode;
};

module.exports = (_env, argv) => ({
	mode: setMode(argv),
	context: __dirname,
	entry: './index',
	output: {
		publicPath: '/'
	},
	resolve: {
		alias: {
			react: 'preact/compat',
			'react-dom': 'preact/compat'
		},
		extensions: ['.js', 'mjs']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				options: {
					sourceMap: true,
					presets: [
						[require.resolve('@babel/preset-typescript'), { jsxPragma: 'h' }],
						[require.resolve('@babel/preset-env'), {
							targets: {
								browsers: ['last 2 versions', 'IE >= 9']
							},
							modules: false,
							loose: true
						}],
						[require.resolve('@babel/preset-react')],
					],
					plugins: [
						[require.resolve('@babel/plugin-transform-runtime')],
						[require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'h', pragmaFrag: 'Fragment', pragmaseState: 'useState', pragmaEffect: 'useEffect', pragmaRef: 'useRef' }],
						[require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
						[require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
					]
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					sourceMap: true,
					presets: [
						[require.resolve('@babel/preset-env'), {
							targets: {
								browsers: ['last 2 versions', 'IE >= 9']
							},
							modules: false,
							loose: true
						}],
						[require.resolve('@babel/preset-react')],
					],
					plugins: [
						[require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'createElement', pragmaFrag: 'Fragment' }],
						[require.resolve('@babel/plugin-proposal-class-properties')],
						[require.resolve('@babel/plugin-transform-react-constant-elements')],
					]
				}
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto'
			}
		]
	},
	devtool: 'inline-source-map',
	node: {
		process: 'mock',
		Buffer: false,
		setImmediate: false
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		...doAnalysis(argv),
		new CopyWebpackPlugin([
			{ from: 'public', to: '' },
			{ from: 'node_modules/material-components-web/dist/material-components-web.min.css', to: '' },
		]),
		new HtmlWebpackPlugin(),
		new CompressionPlugin(),
	],
	// optimization: {
  //   // minimize: true,
  //   // minimizer: [new TerserPlugin()],
  //   usedExports: true,
  //   sideEffects: true,
  // },
});
