module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: 'auto',
                    style: 'expanded'
                },
                files: {
                    'main.css': 'main.scss'
                }
            } 
        },
        watch: {
            options: {
            livereload: true,
        },
        css: {
            files: ['*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            }
        }
    }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['sass', 'watch']);
};