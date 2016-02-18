/*global module:false*/
  module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      // Metadata.
      pkg: grunt.file.readJSON('package.json'),
      compass: {
        dist: {
          options: {
            sassDir: 'scss',
            cssDir: 'css',
            //outputStyle: 'compressed'
          }
        }
      },
      watch: {
        sass: {
          files: 'scss/{,*/}*.{scss,sass}',
          tasks: ['compass']
        }
      },
    });
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task.
    grunt.registerTask('default', ['watch']);
  };