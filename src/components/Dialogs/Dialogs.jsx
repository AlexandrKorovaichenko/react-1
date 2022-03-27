
import React from 'react';
import classDialog from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItem';
import MessageItem from './MessageItems/MessageItem';
import { Field, reduxForm } from 'redux-form';
import { requairedField, maxLenghtCreator } from '../../validatorForms/validator';
import { TextArea } from '../common/Formcontrol/FormControl';


const Dialogs = (props) => {

    let dialogs = props.dialog.dialogs;
    let messages = props.dialog.messages;

    let dialogElements = dialogs.map((d, count) => (<DialogItem key={count} name={d.name} id={d.id} />));
    let messageElements = messages.map((m, count) => (<MessageItem key={count} message={m.message} />));


    let addNewMessage = (value) => { 
        props.onSendMessageClick(value.newMessageText);
      }


    // Редирект
    //if(props.isAuth === false){
    //    return <Navigate to={"/Login"}/>
    //}
    
    return (

        <div className={classDialog.dialogs}>

            <div className={classDialog.dialogsItems} >
                {dialogElements}
            </div>

            <div className={classDialog.messages} >
                <div>{messageElements}</div> 
                <MessageReduxForm onSubmit = {addNewMessage}/>
            </div>

        </div>

    )
}


const maxLenght50 = maxLenghtCreator(50);

const MessageForm = (props) => {
    return(
        <form onSubmit = {props.handleSubmit} >
            <Field component = {TextArea} 
                name = "newMessageText"  
                placeholder = "Enter your message"
                validate = {[requairedField, maxLenght50]}/>
                <button>Seng message111</button>
        </form>

    )
}


const MessageReduxForm = reduxForm({
    form: "addMessage"
})(MessageForm)


export default Dialogs;