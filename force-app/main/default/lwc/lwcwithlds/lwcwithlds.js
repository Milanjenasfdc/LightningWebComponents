import { LightningElement, api, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactSearchController.getContactList';

export default class Lwcwithlds extends LightningElement {
     // Flexipage provides recordId and objectApiName
     @api recordId;
     @api objectApiName;
     fields = ['Name', 'Industry', 'AccountNumber'];
     //Call Apex method using Wire Decorator with a Parameter
     @wire(getContactList, { accId: '$recordId' })
     contacts;


}