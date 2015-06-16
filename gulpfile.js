var gulp=require('gulp');
var vulcanize=require('gulp-vulcanize');
var connect=require('gulp-connect');
var minifyCss=require('gulp-minify-css');
var autoprefixer=require('gulp-autoprefixer');
var toJson=require('gulp-to-json');

gulp.task('vul',function(){
  return gulp.src('elements.html')
  .pipe(vulcanize({
    abspath:'',
    stripComments:true,
    inlineScripts:true,
  }))
  .pipe(gulp.dest('build'));
});
gulp.task('image',function(){
  return gulp.src('images/**/*')
  .pipe(gulp.dest('build/images'));
});
gulp.task('css',function(){
  return gulp.src('{css,elements}/*.css',{base:'{css,elements}'})
  .pipe(autoprefixer({
    browsers:['last 2 versions'],
    cascade:false,
  }))
  .pipe(minifyCss())
  .pipe(gulp.dest('build/css'));
});
gulp.task('tojson',['image'],function(){
  return gulp.src('images/background/*')
  .pipe(toJson({
    filename:"background.json",
    relative:true
  }));
});
gulp.task('serve',function(){
  connect.server({
    port:3000,
    livereload:true
  });
});
