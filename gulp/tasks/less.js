

module.exports = function () {
	$.gulp.task('less', function () {
		return $.gulp.src('src/static/less/main.less')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.less({
			// paths: [ 'src/static/less' ]
		}))
		.pipe($.gp.autoprefixer({
			browsers: ['last 2 versions']
		}))
		.on("error", $.gp.notify.onError({
			title: "Error running something"
		}))
		.pipe($.gp.csso())
		.pipe($.gp.sourcemaps.write('../maps'))
		.pipe($.gulp.dest('build/static/css/'))
		.pipe( $.browserSync.reload ({
			stream: true
		}));
	});
}
