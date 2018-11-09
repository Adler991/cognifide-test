

module.exports = function () {
	$.gulp.task('scripts', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
			'node_modules/slick-carousel/slick/slick.min.js',
			'node_modules/bootstrap-less/js/bootstrap.min.js'])
		.pipe($.gp.concat('libs.min.js'))
		.pipe($.gulp.dest('build/static/js/'))
		.pipe( $.browserSync.reload ({
			stream: true
		}));
	});

	$.gulp.task('scripts-slider', function () {
		return $.gulp.src('src/static/js/main.js')
		.pipe($.gulp.dest('build/static/js/'))
		.pipe( $.browserSync.reload ({
			stream: true
		}));
	});
};
