public class SalesforceIntegrationController {
   
    Public Static void hitAccountApi()
    {
        Http http = new Http();
        HttpRequest req= new HttpRequest();
        //req.setEndpoint('callout:SalesforceToSalesforceConnectNamed/services/data/v64.0/limits/recordCount?sObjects=Account,Contact,Lead');
        req.setEndpoint('callout:SalesforceToSalesforceConnectNamed/services/data/v64.0/queryAll/?q=SELECT+name+from+Account');
        //req.setHeader('content-type','application/json');
        //req.setHeader('Accept','application/json');
        req.setMethod('GET');
        httpresponse response= http.send(req);
        system.debug(response.getbody());
        
    }
	
}