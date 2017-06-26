var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify');

var appBootstrap = ['app/bootstrap/app.js', 'app/router.js', 'app/**/*.js'];

gulp.task('Sass', function () {
    return gulp.src(['app/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('Templates', function() {
    gulp.src('app/templates/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/view/'))
});

gulp.task('IndexTemplates', function() {    
    gulp.src('app/templates/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
});

gulp.task('Application', function () {
    gulp.src(appBootstrap)
    .pipe(uglify({
        mangle: false,
        compress: false,
    }))
    .pipe(concat('application.v1.min.js'))
    .pipe(plumber())
    .pipe(gulp.dest('public/js/'))
});    

gulp.task('watch', function () {
    gulp.watch('app/stylesheet/**/*.scss', ['Sass']);
    gulp.watch(appBootstrap, ['Application']);
    gulp.watch('app/templates/**/*.jade', ['Templates']);
    gulp.watch('app/templates/**/*.jade', ['IndexTemplates']);
    gulp.watch('app/templates/index.jade', ['IndexTemplates']);
});

gulp.task('default', [
    'IndexTemplates', 
    'Templates', 
    'watch', 
    'Sass',
    'Application'
]);
