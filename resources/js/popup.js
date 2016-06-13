(function (entryPoint) {

    var jQuery = require('jquery');

    entryPoint(window.chrome, jQuery);

})(function (chrome, $) {

    $(function () {
        $('#clip-btn').on('click', function (e) {
            console.log('click');
            alert('Clip');
        });
    });

});