(function (entryPoint) {

    var jQuery = require('jquery');

    entryPoint(jQuery);

})(function ($) {

    $(function () {
        $('#clip-btn').on('click', function (e) {
            console.log('click');
            alert('Clip');
        });
    });

});