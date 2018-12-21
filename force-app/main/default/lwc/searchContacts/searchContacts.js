import { LightningElement, track } from 'lwc';
import findContacts from '@salesforce/apex/ContactSearchController.findContacts';

export default class SearchContacts extends LightningElement {
    @track contacts;
    @track errors;
    @track searchKey = '';

    changeHandler(event) {
        this.searchKey = event.target.value;
    }

    handleLoad() {      
        const searchKey = this.searchKey;
        //Invoke using ApexImperativeMethod approach
        findContacts({ searchKey })
            .then(result => {
                this.contacts = result;
                this.error = undefined;
            })
            .catch(error => {
                this.errors = error;
                this.contacts = undefined;
            });

    }
}