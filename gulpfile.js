var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var outputPath = 'output';
var browserSync = require('browser-sync');


gulp.task('styleguide:generate', function() {
    return gulp.src('tiles/*.scss')
        .pipe(styleguide.generate({
            title: ' ',
            server: false,
            rootPath: outputPath,
            overviewPath: 'README.md',
            extraHead: [
                '<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>',
                '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>',
                '<script src="tiles/js/spin.js"></script>',
                '<script src="tiles/js/main.js" type="text/javascript"></script>',
            ],
            // afterSections: '<script>console.log($("#spinnerDemo"));</script>',
            disableEncapsulation: true,
            includeDefaultStyles: true,
            showMarkupSection: false,
            filesConfig: [
                {
                    "name": "TestModule",
                    "files": [
                        "test/hw.js"
                    ],
                    "template": "test/test.html"
                }
            ]
        }))
        .pipe(gulp.dest(outputPath))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'output'
        },
        notify: false,
        open: false
    });
});

gulp.task('styleguide:applystyles', function() {
    return gulp.src('tiles/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(outputPath));
});


gulp.task('watch', ['browser-sync', 'styleguide'], function() {
    // Start watching changes and update styleguide whenever changes are detected
    // Styleguide automatically detects existing server instance
    gulp.watch(['tiles/*.scss', '*.md'], ['styleguide']);
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);