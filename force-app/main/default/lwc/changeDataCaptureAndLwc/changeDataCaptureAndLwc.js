import { LightningElement } from 'lwc';
import { subscribe,unsubscribe,onError,setDebugFlag,isEmpEnabled } from 'lightning/empApi';


export default class ChangeDataCaptureAndLwc extends LightningElement {
    channelName='/data/ContactChangeEvent';
    subscription={};

    connectedCallback()
    {
        console.log('##CallingConnectedCalBack##');
        this.registerErrorHandler();
        this.handleSubscribe();
    }
    disconnectedCallback()
    {
        console.log('##disconnectedCallBackCalling##');
        this.handleUnsubscribe();
    }
    handleUnsubscribeButton()
    {
        console.log('##ClickingOnUnsubscribeButton##');
        this.handleUnsubscribe();
    }
    handleSubscribe()
    {
        console.log('##handleSubscribeCall##');
        const messageCallback = function (response) {
            console.log('New message received: ', JSON.stringify(response));
            // Response contains the payload of the new message received
            console.log('##MessageCallBack##');
        };
        subscribe(this.channelName,-1,messageCallback).then(response=>{
            console.log('Subscribe Request Sent Successfuly To ',JSON.stringify(response.channel));
            this.subscription=response;
        }).catch(error=>{
            console.log('Error Occurred while Subscribing CDC event');
        });
    }
    handleUnsubscribe()
    {
        unsubscribe(this.subscription,(response)=>{
            console.log('##ResponseWhileUnsubscribe##',JSON.stringify(response));
        });
    }
    registerErrorHandler()
    {
        console.log('##CallingRegisterError##');
        onError((error)=>{
            console.log('##Get Error From Server##',JSON.stringify(error));
        });
    }

}