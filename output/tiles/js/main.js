// console.log("Hello world");
//
//     console.log($('#spinnerDemo'));


// $('#spinnerDemo').find('button').on('click', function () {
//     console.log($(this));
// });

var SPINNER = {
    getSpinnerObject: function () {
        return {
            lines: 17, // The number of lines to draw
            length: 29, // The length of each line
            width: 12, // The line thickness
            radius: 0, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 90, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#65BF44', // #rgb or #rrggbb or array of colors
            speed: 1.2, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: true, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '540px', // Top position relative to parent
            left: '1160px' // Left position relative to parent
        };

    }

};

var target = document.getElementById('spinnerDemo');
var spinner = new Spinner(SPINNER.getSpinnerObject()).spin(target);
