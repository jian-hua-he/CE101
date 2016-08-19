import $ from 'jquery';

class FontClipper {
    constructor() {
        this.selector = $('h1, h2, h3, h4, h5, h6, p, a, span');
    }

    enable() {
        alert('Enable Font Clipper');
    }

    disable() {
        alert('Disable Font Clipper');
    }
}

export default FontClipper;