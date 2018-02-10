var gulp = require('gulp'),
    uglify = require('gulp-uglifyes'),
    plumber = require('gulp-plumber'),
    uglify_option = {
        mangle: true,
        ecma: 6
    };

gulp.task('randomizer-minify', function() {
    return gulp.src('./src/js/randomizer.js')
        .pipe(plumber())
        .pipe(uglify(uglify_option))
        .pipe(gulp.dest('./js'))
        .pipe(gulp.dest('./docs/js/'));
});

gulp.task('serviceworker-minify', function() {
    return gulp.src('./src/serviceworker.js')
        .pipe(plumber())
        .pipe(uglify(uglify_option))
        .pipe(gulp.dest('./'))
        .pipe(gulp.dest('./docs/'));
});

gulp.task('static-copy', function() {
    gulp.src('./pic/*').pipe(gulp.dest('./docs/pic/'));
    gulp.src('./index.html').pipe(gulp.dest('./docs'));
    gulp.src('./image/*').pipe(gulp.dest('./docs/image/'));
    return;
});

gulp.task('default', ['randomizer-minify', 'serviceworker-minify', 'static-copy'], function() {
    return;
});