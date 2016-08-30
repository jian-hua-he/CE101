import $ from 'jquery';
import { detectFont, supportedFonts } from 'detect-font';
import Tooltip from './Tooltip';

let _bindEvent = (selector, tooltip) => {
    selector.on('mouseenter', (e) => {
        let fontFamily = detectFont(e.target);
        let target = $(e.target);
        let top = target.offset().top - 26;
        let left = target.offset().left;

        tooltip.setText(fontFamily);
        tooltip.setStyle(top, left);
        tooltip.display();
    });

    selector.on('mouseleave', (e) => {
        tooltip.hide();
    });
};

let _unbindEvent = (selector, tooltip) => {
    selector.unbind('mouseenter');
    selector.unbind('mouseleave');
};

class FontClipper {
    constructor() {
        this.el = $('h1, h2, h3, h4, h5, h6, p, a, span, ul, ol, li');
        this.tooltip = new Tooltip;
    }

    enable() {
        console.log('Enable Font Clipper');
        _bindEvent(this.el, this.tooltip);
    }

    disable() {
        console.log('Disable Font Clipper');
        _unbindEvent(this.el, this.tooltip);
    }
}

export default FontClipper;