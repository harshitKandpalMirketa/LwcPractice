
import { LightningElement,api } from 'lwc';

export default class ParentLwc extends LightningElement {

    @api childOneSelected = "Not Selected";
    @api childTwoSelected = "Not Selected";
    @api childThreeSelected = "Not Selected";

    totalSelected = 0;
    
    eventCall(){
        const selectedEvent = new CustomEvent("parentevent", {
            detail : this.totalSelected 
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent);
    }

    handleChildEvent(event){
        let childNumber = event.detail.childNumber;
        let isSelected = event.detail.isSelected;
        if(childNumber === 'child One'){
            if(isSelected === true){
                this.childOneSelected = 'Selected';
                this.totalSelected++;
                this.eventCall();
            }
            else{
                this.childOneSelected = 'Not Selected';
                this.totalSelected--;
                this.eventCall();
            }
        }
        else if(childNumber === 'child Two'){
            if(isSelected === true){
                this.childTwoSelected = 'Selected';
                this.totalSelected++;
                this.eventCall();
            }
            else{
                this.childTwoSelected = 'Not Selected';
                this.totalSelected--;
                this.eventCall();
            }
        }
        else if(childNumber === 'child Three'){
            if(isSelected === true){
                this.childThreeSelected = 'Selected';
                this.totalSelected++;
                this.eventCall();
            }
            else{
                this.childThreeSelected = 'Not Selected';
                this.totalSelected--;
                this.eventCall();
            }
        }
    }
}