const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  // entry: './src/index',
  // externals: {
  //   react: {
  //     root: 'React',
  //     commonjs2: 'react',
  //     commonjs: 'react',
  //     amd: 'react'
  //   },
  //   'react-dom': {
  //     root: 'ReactDOM',
  //     commonjs2: 'react-dom',
  //     commonjs: 'react-dom',
  //     amd: 'react-dom'
  //   }
  // },
  // devtool: 'sourcemap',
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       options: {
  //         sourceMap: true,
  //         presets: [
  //           [require.resolve('@babel/preset-env'), {
  //             targets: {
  //               browsers: ['last 2 versions', 'IE >= 9']
  //             },
  //             modules: false,
  //             loose: true
  //           }],
  //           [require.resolve('@babel/preset-react')],
  //         ],
  //         plugins: [
  //           // [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'createElement', pragmaFrag: 'Fragment' }],
  //           [require.resolve('@babel/plugin-proposal-class-properties')],
  //           [require.resolve('@babel/plugin-transform-react-constant-elements')],
  //         ]
  //       }
  //     },
  //     {
  //       test: /\.s?css$/,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'sass-loader'
  //       ]
  //     }
  //   ]
  // },
  plugins: [
    new CopyPlugin([
      { from: 'src', to: 'dist' }
    ])
  ]
};
