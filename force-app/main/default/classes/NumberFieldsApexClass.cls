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
        
        string fieldNames = '';
        List<string> fieldList = new List<string>() ; 
        for(String fieldName : mapOfField.keySet()) {
            Schema.DescribeFieldResult fieldDescribe = mapOfField.get(fieldName).getDescribe();
            if (fieldDescribe.getType() == Schema.DisplayType.PHONE) {
                if(fieldNames == ''){
                    fieldNames = String.valueOf(fieldName);
                    fieldList.add(fieldName);
                }
                else{
                    fieldNames = fieldNames+ ', ' + String.valueOf(fieldName);
                    fieldList.add(fieldName);
                }
            }
        }
        system.debug(fieldNames);
        if(fieldNames != ''){
            sObject record = Database.query('SELECT ' + fieldNames + ' FROM ' + objectApiName + ' WHERE Id = \''  + id + '\'');
            for(string fieldName: fieldList){
                if(record.get(FieldName) != null){
                    map<String, String> fieldMap = new map<String, String>();
                    fieldMap.put('value',FieldName);
                    fieldMap.put('label',FieldName);
                    options.add(fieldMap);
                }
            }     
        }
          
        system.debug(options);
        return options;
    }
}