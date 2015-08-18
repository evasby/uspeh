module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*concat: {
            // 2. Настройка для объединения файлов находится тут
            dist: {
                src: [
                    'js/libs/*.js', // Все JS в папке libs
                    'js/script.js'  // Конкретный файл
                ],
                dest: 'js/build/production.js',
            }
        },*/
        /*uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },*/    
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true
                },
                files: {
                    'css/all.css': 'sass/all.scss',
                    'css/all-old-ie.css': 'sass/all-old-ie.scss',
                }
            }
        },
        ftp_upload: {
            build: {
                auth: {
                    host: 'wfs.by',
                    port: 21,
                    authKey: 'key1'
                },
                src: ['css/all.css', 'css/all-old-ie.css'],
                dest: 'home/evasby/www/wfs.by/css',
                exclusions: ['.gitignore', '.ftppass']
            }
        },       
        watch: {
            css: {
                files: ['sass/*.scss', '*.php'],
                tasks: ['sass', 'ftp_upload'],
                //tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-upload');
    grunt.registerTask('default', ['sass', 'ftp_upload', 'watch']);
};