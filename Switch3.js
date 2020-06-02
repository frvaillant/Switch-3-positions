class Switch3 {

    constructor(labels, values, renderZoneId, initval= 0, destinationInputId = null) {
        this.labels = labels;
        this.values = values;
        this.renderZone = document.getElementById(renderZoneId);
        this.bar        = null;
        this.cursor     = null;
        this.left       = null;
        this.right      = null;
        this.width      = null;
        this.initval    = initval;
        this.inputId    = destinationInputId;
    }

    init() {
        this.render();
        this.bar            = document.getElementById('switch3-bar');
        this.cursor         = document.getElementById('switch3-cursor');
        this.field          = (this.inputId) ? document.getElementById(this.inputId) : document.getElementById('switch3-val');
        this.labels         = document.getElementsByClassName('switch3-label');
        const barDimensions = this.bar.getBoundingClientRect();
        this.left           = barDimensions.left;
        this.right          = barDimensions.right;
        this.center         = this.right - ((this.right - this.left) / 2);

        this.bar.addEventListener('click', (e) => {
            this.cursor.classList=['switch3-cursor'];
            this.cursor.classList.add('pos-' + this.mousePosition(e));
            this.field.value = this.values[this.mousePosition(e)];
            this.removeActiveLabels().addActiveLabels(this.mousePosition(e));
        });
    }

    mousePosition(e) {
        const mouseClickX = e.clientX;
        if (Math.abs(this.right-mouseClickX) < Math.abs(this.center-mouseClickX)) {
            return 2;
        } else if (Math.abs(this.center-mouseClickX) < Math.abs(this.left- mouseClickX)) {
            return 1;
        } else {
            return 0;
        }
    }

    render() {
        this.renderZone.innerHTML = this.createElement();
    }

    createElement() {
        let html = '<div class="switch3-container" id="switch3-container">\n' +
                    '    <div class="switch3-bar" id="switch3-bar">\n' +
                    '      <div class="switch3-cursor pos-' + this.initval + ' " id="switch3-cursor"></div>\n' +
                    '    </div>\n' +
                    '    <div class="switch3-label" data-value="'+ this.values[0] +'" id="label0">' + this.labels[0] + '</div>\n' +
                    '    <div class="switch3-label" data-value="'+ this.values[1] +'" id="label1">' + this.labels[1] + '</div>\n' +
                    '    <div class="switch3-label" data-value="'+ this.values[2] +'" id="label2">' + this.labels[2] + '</div>\n' ;
        if (!this.inputId) {
            html += '<input type="hidden" id="switch3-val" name="switch3-val">';
        }
        html += '    </div>';
        return html;
    }

    removeActiveLabels() {
        for(let i=0; i<this.labels.length; i++) {
            this.labels[i].classList.remove('active');
        };
        return this;
    }
    addActiveLabels(position) {
        for(let i=0; i<this.labels.length; i++) {
            if (this.labels[i].id === 'label'+position) {
                this.labels[i].classList.add('active')
            }
        };
        return this;
    }
}
