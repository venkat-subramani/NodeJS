module.exports = function(grunt) {

  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
             target: {
                     files:['js/*.js','css/*.css'],
                     tasks:['uglify','cssmin']
             }
        },
        cssmin: {
                 combine: {
                           files: {
                                  'css/combined.css': ['css/custom.css', 'css/menu.css']
                                  }
                          }
        },
        uglify: {
                options: {
                          mangle: false
                         },
                target: {
                          files: {
                         'js/combined.min.js': ['js/dropdown.js','js/util.js']
                                 }
                           }
                }
  });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}
