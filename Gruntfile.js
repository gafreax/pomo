// npm install grunt-contrib-cssmin --save-dev

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        favicons: {
            icons: {
                src: 'assets/images/favicon.png',
                dest: 'public/'
            }
        },
        copy: {
            bootstrap: {
                files: [{
                        src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        dest: 'public/css/bootstrap.min.css'
                    },
                    {
                        src: 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                        dest: 'public/css/bootstrap-theme.min.css'
                    },
                    {
                        src: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
                        dest: 'public/js/bootstrap.min.js'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/bootstrap/dist/fonts/*',
                        filter: 'isFile',
                        dest: 'public/fonts/'
                    },
                    {
                        src: 'node_modules/jquery/dist/jquery.slim.min.js',
                        dest: 'public/js/jquery.slim.min.js'
                    },
                    {
                        src: 'src/index.html',
                        dest: 'public/index.html'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'assets/images/*',
                        dest: 'public/images/'
                    },
                ],
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-favicons');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'favicons']);

};
