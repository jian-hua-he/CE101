import $ from 'jquery';
import { detectFont, supportedFonts } from 'detect-font';
import Tooltip from './Tooltip';

let _bindEvent = (selector, tooltip) => {
    selector.on('mouseenter', (e) => {
        let fontFamily = detectFont(e.target);
        tooltip.setText(fontFamily);
        tooltip.display();
    });

    selector.on('mouseleave', (e) => {
        tooltip.hide();
    });
};

let _unbindEvent = (selector, tooltip) => {
    selector.unbind('mouseenter')
    selector.unbind('mouseleave');
};

class FontClipper {
    constructor() {
        this.selector = $('h1, h2, h3, h4, h5, h6, p, a, span');
        this.tooltip = new Tooltip;
    }

    enable() {
        console.log('Enable Font Clipper');
        _bindEvent(this.selector, this.tooltip);
    }

    disable() {
        console.log('Disable Font Clipper');
        _unbindEvent(this.selector, this.tooltip);
    }
}

export default FontClipper;