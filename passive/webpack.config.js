var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devServer: {
  	inline:true,
  	contentBase:'./public',
  	port:3001
  },
  entry: {
    app: './server.js'  
  },
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  // silence errors for packages that are not referenced
  node: {
      net: 'empty',
      fs: 'empty'
  },
  
  // add loaders as per warning/error feedback
  module : {
	  loaders : [
	      // Support for *.<extenion> files.
	      { test: /\.json$/,  loader: 'json' },
	      { test: /\.css$/,  loader: 'css' },

	      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
	      
	      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000' }, 
	      { test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader' },
	      //{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
	      //{ test: /\.css$/, loader: "style-loader!css-loader" }
    ]

  },
  plugins: [
      new ExtractTextPlugin("./jumbotron.css")
  ]
};