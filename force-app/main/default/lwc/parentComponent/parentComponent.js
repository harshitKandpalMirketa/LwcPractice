import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {

    value = [];
    @track comboBoxOn = false;
    @track textOn = false;
    @track childValues;

    get options() {
        return [
            { label: 'ComboBox', value: 'comboBox' },
            { label: 'Text', value: 'text' },
        ];
    }
    handleChange(event) {
        this.value = event.detail.value;
        this.comboBoxOn = this.value.includes('comboBox');
        this.textOn = this.value.includes('text');
        this.childValues = undefined;
    }
    handleChildValueEvent(event){
        this.childValues = event.detail;
    }
}