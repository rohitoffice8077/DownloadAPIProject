import { LightningElement } from 'lwc';
import hitAccountApi from '@salesforce/apex/SalesforceIntegrationController.hitAccountApi';

export default class DownloadImageThroughApi extends LightningElement {


    handleDownloadImage() {

        hitAccountApi().then(result=>{
            console.log(result);
            window.location.href = 'data:application/octet-stream;base64,' + result;
        }).catch(error=>{
            console.log(error);
        });
        // In a real scenario, you would fetch this URL from an API endpoint
    }
}