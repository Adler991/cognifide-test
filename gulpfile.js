
/*-------------------*/
global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});


/*-------------------*/ 

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'less', 'scripts', 'scripts-slider'),
	$.gulp.parallel('watch', 'serve')
	));