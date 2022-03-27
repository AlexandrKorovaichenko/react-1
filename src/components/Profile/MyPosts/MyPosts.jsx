import React from 'react';
import Post from './Post/Post';
import classMyPosts from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { requairedField, maxLenghtCreator  } from '../../../validatorForms/validator';
import { TextArea } from '../../common/Formcontrol/FormControl';


const MyPosts = (props) => {

  //debugger;

  //data
  let posts = props.profile.posts;
  let postElements = posts.map( (p, count) => (<Post key={count} message={p.message} amount={p.amount} />) );

  let addPost = (value) => { 
    props.addPost(value.postText);
  }


  return (

    <div>

      <h3>My post</h3>

      <PostReduxForm onSubmit = {addPost} />

      <div className={classMyPosts.posts}>
        {postElements}
      </div>

    </div>

  );

}

const maxLenght10 = maxLenghtCreator(10);

const PostForm = (props) => {

 return ( 
          <form onSubmit = {props.handleSubmit}>
        
              <Field component = {TextArea} name = "postText" validate = {[requairedField, maxLenght10]}/>
            
              <button>Add post</button>
        
          </form>
      )
}


const PostReduxForm = reduxForm({
    form: "addPost"
})(PostForm)


export default MyPosts; 