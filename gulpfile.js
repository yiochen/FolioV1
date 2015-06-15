var gulp=require('gulp');
var vulcanize=require('gulp-vulcanize');
var connect=require('gulp-connect');

gulp.task('vul',function(){
  return gulp.src('elements.html')
  .pipe(vulcanize({
    abspath:'',
    excludes:[],
    stripExcludes:false
  }))
  .pipe(gulp.dest('build'));
});

gulp.task('serve',function(){
  connect.server({
    port:3000,
    livereload:true
  });
});
