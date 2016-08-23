import $ from 'jquery'

class Tooltip {
    constructor() {
        let body;

        if (!body) {
            body = $('body');
        }

        body.append("<div class='font-clipper-tooltip'></div>");

        this.tooltip = $('.font-clipper-tooltip');
    }

    setText(text) {
        this.tooltip.text(text);
        console.log('Set text: ' + text);
    }

    display() {
        this.tooltip.show();
        console.log('Display tooltip');
    }

    hide() {
        this.tooltip.hide();
        console.log('Hide tooltip');
    }
}

export default Tooltip;