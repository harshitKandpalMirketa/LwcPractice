/**
 * @description       : 
 * @author            : Harshit@mirketa.com
 * @last modified on  : 06-12-2023
 * @last modified by  : Harshit@mirketa.com
**/
public class NumberFieldsApexClass {

    @AuraEnabled(cacheable=true)
    public static List<map<String, String>> getNumberFields(String objectApiName, Id id) {
        List<map<String, String>> options = new  List<map<String, String>>();

        Map <String,Schema.SObjectType> objectDescribe = Schema.getGlobalDescribe();

        Map<String, Schema.SObjectField> mapOfField = objectDescribe.get(objectApiName).getDescribe().fields.getMap();
        
        for(String fieldName : mapOfField.keySet()) {
            Schema.DescribeFieldResult fieldDescribe = mapOfField.get(fieldName).getDescribe();

            if (fieldDescribe.getType() == Schema.DisplayType.PHONE) {
                sObject record = Database.query('SELECT ' + fieldName + ' FROM ' + objectApiName + ' WHERE Id = \''  + id + '\'');
                if(record.get(FieldName) != null){
                    map<String, String> fieldMap = new map<String, String>();
                    fieldMap.put('value',FieldName);
                    fieldMap.put('label',fieldDescribe.getLabel());
                    options.add(fieldMap);
                }
            }
        }
        system.debug(options);
        return options;
    }
}