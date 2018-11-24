let gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba'),
	colorFunc = require('postcss-color-function'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  /*browserSync.init({
    notify: false,
    server: {
      baseDir: "IKEA"
    }
 });
	
watch('./app/index.html', function() {
			browserSync.reload();
		});*/
watch('styles/*.css', function() {
    gulp.start('styles');
});
	


	
});
	
gulp.task('styles', function() {
  return gulp.src('./styles/style.css')
    	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba ,autoprefixer, colorFunc]))
  		.on('error', function(errorInfo) {
	  	console.log(errorInfo.toString());
  		this.emit('end');
  	})
    	.pipe(gulp.dest('./dist'));
});
