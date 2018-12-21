public with sharing class ContactSearchController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        system.debug('searchKey is:'+ searchKey);
        String key = '%' + searchKey + '%';
        List<Contact> lstContacts = new List<Contact>();
        lstContacts = [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Name LIKE :key LIMIT 10];
        system.debug('lstContacts are:'+ lstContacts);
        return lstContacts;
    }


    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 10];
    }

}
