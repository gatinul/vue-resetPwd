var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');

gulp.task('default', function() {
  return gulp.src('build/*.js')
  	.pipe(named())
    .pipe(webpack({
		output:{
			filename:'[name].js'
		},
		resolve : {
		    alias: {
		        'vue$': 'vue/dist/vue.js'
		    }
		},
		watch :true,
		devtool:'source-map',
        module: {
	    	loaders: [
        {test: /\.vue$/,query:{presets:['react','es2015']}, exclude: /node_modules/,loader: 'vue-loader'},
				{test: /\.(js|jsx)$/, query:{presets:['react','es2015']}, exclude: /node_modules/, loader: "babel-loader" },
		    {test: /\.css$/, loader: 'style!css'},
				{test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192&name=images/[name].[ext]'},
	    	],
    	}
	}))
    .pipe(gulp.dest('dist'));
});
