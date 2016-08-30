import $ from 'jquery'

class Tooltip {
    constructor() {
        $('body').append("<div id='font-clipper-tooltip'></div>");
        this.el = $('#font-clipper-tooltip');
    }

    setText(text) {
        this.el.text(`Font Face: ${text}`);
    }

    setStyle(top, left) {
        this.el.css({
            'font-size': '12px',
            'color': '#DDD',
            'background': '#333',
            'position': 'absolute',
            'padding': '0.5em 1em',
            'border-radius': '0.5em',
            'top': top,
            'left': left
        });
    }

    display() {
        this.el.show();
    }

    hide() {
        this.el.hide();
    }
}

export default Tooltip;