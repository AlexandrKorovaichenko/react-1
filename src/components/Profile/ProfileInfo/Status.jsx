import React from 'react';
//import classProfileInfo from './ProfileInfo.module.css';
//import Preloader from "../../common/preloader/preloader";

class Status extends React.Component { 

state = {
    editMode: false,
    status: this.props.status 
}

activateEditMode(){  
    this.setState({
        editMode: true
    });
}

deActivateEditMode(){ 

    this.setState({
        editMode: false
    });
    
    this.props.updateStatusThunkCreator(this.state.status);
    //this.props.getStatusThunkCreator(this.props.userId);

}


onStatusChange (event){

    this.setState({
        status: event.currentTarget.value
    });
}

componentDidUpdate(){

}


render(){
    
    //console.log(this.state);

    return(
            <div>
                
                    { !this.state.editMode &&
                        <div>      
                            <span onClick={ this.activateEditMode.bind(this) }> { this.props.status } </span>
                        </div>
                    }
                    
                    { this.state.editMode &&
                        <div>  
                            <input onChange  = { this.onStatusChange.bind(this) } 
                                   autoFocus = { true } 
                                   onBlur    = { this.deActivateEditMode.bind(this) } 
                                   defaultValue = { this.props.status } />
                        </div>
                    }

            </div>
        )
    }
}

export default Status; 