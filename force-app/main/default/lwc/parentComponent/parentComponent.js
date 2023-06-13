import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {

    value = [];
    @track comboBoxOn = false;
    @track textOn = false;
    @track radioOn = false;
    @track childValues;

    get options() {
        return [
            { label: 'ComboBox', value: 'comboBox' },
            { label: 'Text', value: 'text' },
            { label: 'RadioGroup', value: 'radioGroup' },
        ];
    }
    handleChange(event) {
        this.value = event.detail.value;
        this.comboBoxOn = this.value.includes('comboBox');
        this.textOn = this.value.includes('text');
        this.radioOn = this.value.includes('radioGroup');
        this.childValues = undefined;
    }

    handleChildValueEvent(event){
        this.childValues = event.detail;
    }


}