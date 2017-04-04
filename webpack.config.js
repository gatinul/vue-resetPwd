var fs = require('fs')
var path = require('path')
var glob = require('glob')
var webpack = require('webpack')
var entry = {}

var files = glob.sync('./build/apps/*/app.js');
var newEntries = {};

files.forEach(function(f){
   var name = /.*\/(apps\/.*?\/app)\.js/.exec(f)[1];//得到apps/question/index这样的文件名
   newEntries[name] = f;
});




module.exports = {
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true
  // },
  // performance: {
  //   hints: false
  // },
  devtool: 'inline-source-map',

  entry: newEntries,
  // entry:fs.readdirSync(__dirname).reduce((entries, dir) => {
  //     const fullDir = path.join(__dirname, dir)
  //     const entry = path.join(fullDir, 'index.js')
  //     if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
  //       entries[dir] = entry //['webpack-hot-middleware/client', entry]
  // 			console.log(entries[dir])
  //     }
  //
  //     return entries
  //   }, {})
  output:{
    path:path.join(__dirname,'_build'),
    filename:'[name].js',
    chunkFilename:'[name].js',
    publicPath:'../_build/'
  },
  // watch:true,
  resolve:{
    alias:{
      'vue':'vue/dist/vue.js',
      'vuex':'vuex/src/index.esm.js',
      'animate':'animate.css/animate.min.css'
    }
  },
  context: __dirname,
  node: {
    __dirname: true
  },
  module:{
    rules:[
      {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'},
      {test:/\.vue$/,loader:'vue-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name: 'based',
      filename: 'based.js'
    }),
    new webpack.BannerPlugin('the file is created by gatinul')
  ]
}
