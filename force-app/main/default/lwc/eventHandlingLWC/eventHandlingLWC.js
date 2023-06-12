import { LightningElement,api, track, wire } from 'lwc';
import getNumberFields from '@salesforce/apex/NumberFieldsApexClass.getNumberFields'

export default class EventHandlingLWC extends LightningElement {
    @api objectApiName;
    @api recordId;

    @track fieldOptions = [];
    
    @wire (getNumberFields, {objectApiName : '$objectApiName', id: '$recordId'}) 
    setFieldOptions({data,error}){
        if(data){
            this.fieldOptions = data;
        }
        else if(data){
            console.log(error);
        }
    }

    get numberFieldsOptions(){
        return this.fieldOptions;
    }
    
}