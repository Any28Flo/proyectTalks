module.exports = (grunt)=>{

  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/main.css': 'scss/main.scss',       // 'destination': 'source'
        }
      }
    },
      watch: {
      scripts: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    }

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
}
