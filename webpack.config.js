const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template : './src/markup/index.html',
	filename : 'index.html',
	inject : 'body'
});

module.exports = {
	entry : './src/scripts/index.js',

	output : {
		filename : 'bundle.js',
		path : path.resolve( __dirname, 'dist/resources/scripts' )
	},

	module : {
		loaders : [
			{ 
				test : /\.jsx?$/, 
				loader : 'babel-loader', 
				exclude : /node_modules/ 
			},
			{
				test : /\.json$/,
				loader : 'json-loader',
				exclude : /node_modules/
			}
		]
	},

	resolve : {
		extensions: [ '.js', '.jsx', '.json' ]
	},

	devServer : {
		contentBase : path.join( __dirname, 'dist' ),
		port : 6969
	},

	plugins : [ HtmlWebpackPluginConfig ]
}
