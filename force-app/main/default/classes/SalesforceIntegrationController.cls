public class SalesforceIntegrationController {
   @AuraEnabled
    Public Static string hitAccountApi()
    {
        Http http = new Http();
        HttpRequest req= new HttpRequest();
        //req.setEndpoint('callout:SalesforceToSalesforceConnectNamed/services/data/v64.0/limits/recordCount?sObjects=Account,Contact,Lead');
        req.setEndpoint('callout:SalesforceToSalesforceConnectNamed/services/data/v54.0/sobjects/ContentVersion/0685g000006YsdcAAC/VersionData');
        //req.setHeader('content-type','application/json');
        //req.setHeader('Accept','application/json');
        req.setMethod('GET');
        httpresponse response= http.send(req);
        system.debug(response.getbody());
        string base64StringImage = EncodingUtil.base64encode(response.getBodyAsBlob());
        system.debug('Base64 Encoded Image: ' + base64StringImage);
        return base64StringImage;
        
    }
	
}