import { LightningElement } from 'lwc';

export default class ChildText extends LightningElement {

    handleChange(event) {
        const selectedEvent = new CustomEvent("textevent", {
          detail: event.target.value
        });
    
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
      }
}