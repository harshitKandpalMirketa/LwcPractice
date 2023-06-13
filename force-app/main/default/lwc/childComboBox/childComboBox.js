import { LightningElement } from 'lwc';

export default class ChildComboBox extends LightningElement {
    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
      const selectedEvent = new CustomEvent("comboboxevent", {
        detail: event.target.value
      });
  
      // Dispatches the event.
      this.dispatchEvent(selectedEvent);
    }
}