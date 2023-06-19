import { LightningElement, api } from 'lwc';

export default class GrandParentLwc extends LightningElement {

    @api childSelected = 0;

    handleParentEvent(event){
        console.log(event.detail);
        this.childSelected = event.detail;
    }

}