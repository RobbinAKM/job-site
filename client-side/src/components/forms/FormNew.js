import React, { Component } from 'react';
import Form from './Form';
import FormReview from './FormReview';
import {reduxForm} from 'redux-form';


class FormNew extends Component{

 state={showFormReview:false};

 renderContent(){
   if(this.state.showFormReview){
     return <FormReview onCancel={()=>this.setState({showFormReview:false})} />;
   }
   return <Form onFormSubmit={()=>this.setState({showFormReview:true})} />;
 }

  render(){
    return(
      <div>{this.renderContent()}</div>
    )
  }

}

export default reduxForm({
  form:'jobForm'
 })(FormNew);
