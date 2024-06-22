module.exports = function (eleventyConfig) {
  // Configs per project
  const folder = "";
  const assets = folder + "/assets";
  const assetFinal = "assets";

  const paths = {
  html: {
    src: ['./src/' + folder + '/*.html'],
    dest: './dist/' + folder + '/',
    srcpurity: ['./dist/' + folder + '/*.html'],
    destpurity: './dist/' + folder + '/',
  },
  images: {
    src: ['./src/' + assets + '/img/**/**/*'],
    dest: './dist/' + assets + '/img/',
  },
  sass: {
    src: ['./src/' + assets + '/sass/*.scss'],
    dest: './src/' + assets + '/css'
  },
  css: {
    src: ['./src/' + assets + '/css/**/*.css'],
    dest: './dist/' + assets + '/tmp/css/',
    srcone: ['./dist/' + assets + '/tmp/css/**/*.css'],
    destone: './dist/' + assets + '/css/',
  },
  fonts_ttf: {
    src: ['./src/' + assets + '/fonts/**/*'],
    dest: './dist/' + assets + '/fonts/',
  },
  fonts_web: {
    src: ['./src/' + assets + '/webfonts/**/*'],
    dest: './dist/' + assets + '/webfonts/',
  },
  styles: {
    src: ['./src/' + assets + '/scss/**/*.scss'],
    dest: './dist/' + assets + '/scss/',
  },
  scripts: {
    src: ['./src/' + assets + '/js/**/*.js'],
    dest: './dist/' + assets + '/tmp/js/',
    srcone: ['./dist/' + assets + '/tmp/js/**/*.js'],
    destone: './dist/' + assets + '/js/',
  },
  cachebust: {
    src: ['./src/' + folder + '/**/*.html'],
    dest: './dist/' + folder + '/',
  },
  final: {
    srcjs: ['./dist/' + assets + '/tmp/js/**/*.js'],
    srccss: ['./dist/' + assets + '/css/**/all-min.css'],
    destcss: './dist/' + assets + '/css/',
    destjs: './dist/' + assets + '/js/',
  }
};





}
