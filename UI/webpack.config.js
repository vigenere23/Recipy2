const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
	module: {
		rules: [
			{
					test: /\.vue$/,
					exclude: /node_modules/,
					loader: 'vue-loader'
			},
			{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|gif||svg)$/,
				loader: 'file-loader'
			}
		],
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    }
  }
}