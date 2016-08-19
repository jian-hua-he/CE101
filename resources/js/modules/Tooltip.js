class Tooltip {
    constructor() {
        this.text = '';
    }

    setText(text) {
        this.text = text;
        console.log('Set text: ' + this.text);
    }

    display() {
        console.log('Display tooltip');
    }

    hide() {
        console.log('Hide tooltip');
    }
}

export default Tooltip;