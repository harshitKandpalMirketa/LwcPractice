import { LightningElement, api } from 'lwc';

export default class ChildLwc extends LightningElement {

    @api childNumber = '';
    btnVariant = 'brand';
    @api isSelected = false;

    handleClick(event) {
        this.isSelected = !this.isSelected;
        let details = {isSelected: this.isSelected, childNumber: this.childNumber}
        const selectedEvent = new CustomEvent("childevent", {
          detail: details
        });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
      }
}