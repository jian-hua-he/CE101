import $ from 'jquery';
import { detectFont, supportedFonts } from 'detect-font';

let _bindEvent = (selector) => {
    selector.on('mouseenter', (e) => { 
        let fontFamily = detectFont(e.target); 
        console.log(fontFamily); 
    });
};

let _unbindEvent = (selector) => {
    selector.on('mouseenter');
};

class FontClipper {
    constructor() {
        this.selector = $('h1, h2, h3, h4, h5, h6, p, a, span');
    }

    enable() {
        console.log('Enable Font Clipper');
        _bindEvent(this.selector);
    }

    disable() {
        console.log('Disable Font Clipper');
        _unbindEvent(this.selector);
    }
}

export default FontClipper;