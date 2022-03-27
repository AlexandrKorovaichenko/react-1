
//import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageActionCreator} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import {RedirectComponent} from '../../hoc/RedirectComponent';


let mapStateToProps = (store) => {
            return {
                dialog: store.dialog
            }
        }
        
let mapDispatchToProps = (dispatch) => {
            return {
                onSendMessageClick: (newMessageText) => { dispatch( sendMessageActionCreator(newMessageText) ) }
            }
        }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)( RedirectComponent(Dialogs) );

export default DialogsContainer;