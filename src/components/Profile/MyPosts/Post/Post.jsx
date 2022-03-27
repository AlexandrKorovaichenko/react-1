import React from 'react';
import classPost from './Post.module.css';

const Post = (props) => {
    
  return(

          <div className = {classPost.item}>

            <img alt="" src = "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg"/>
            
            {props.message}

            <div>
              <span>like ({props.amount})</span>
            </div>
          
          </div>

    );
}

export default Post;