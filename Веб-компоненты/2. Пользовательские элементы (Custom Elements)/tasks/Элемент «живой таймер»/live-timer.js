class LiveTimer extends HTMLElement {

    constructor() {
        super();
        this.intervalID = null;
    }

    connectedCallback() {
        let tickEvent = new CustomEvent('tick', {
            detail: {date: new Date()}
        });

        let timeFormattedElement = document.createElement('time-formatted');
        timeFormattedElement.setAttribute('hour', 'numeric');
        timeFormattedElement.setAttribute('minute', 'numeric');
        timeFormattedElement.setAttribute('second', 'numeric');
        //this.append(timeFormattedElement);
        this.innerHTML = timeFormattedElement.innerHTML;
        this.intervalID = setInterval(() => {
            let date = new Date();
            timeFormattedElement.setAttribute('datetime', date);
            this.innerHTML = timeFormattedElement.innerHTML;
            this.dispatchEvent(new CustomEvent('tick', {
                detail: {date: date}
            }));
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.intervalID);
    }
}

customElements.define("live-timer", LiveTimer);