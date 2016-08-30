import $ from 'jquery'

class Tooltip {
    constructor() {
        $('body').append("<div id='font-clipper-tooltip'></div>");
        this.el = $('#font-clipper-tooltip');
    }

    setText(text) {
        this.el.text(`Font Face: ${text}`);
        console.log('Set text: ' + text);
    }

    setStyle(top, left) {
        this.el.css({
            'font-size': '12px',
            'color': '#DDD',
            'background': '#333',
            'position': 'absolute',
            'padding': '0.5em',
            'border-radius': '0.5em',
            'top': top,
            'left': left
        });
    }

    display() {
        this.el.show();
        console.log('Display tooltip');
    }

    hide() {
        this.el.hide();
        console.log('Hide tooltip');
    }
}

export default Tooltip;