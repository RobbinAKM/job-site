import React, { Component } from 'react';
import {reduxForm , Field} from 'redux-form';
import {Link} from 'react-router-dom';
import FormField from './FormField';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';


const FIELDS=[
  {label:"name" ,name:"title", noValueError:"Please provide your first and last name"},
  {label:"Japanese level" ,name:"jplevel" , noValueError:"Write Japanese level from N5~N1"},
  {label:"Visa" ,name:"visa",noValueError:"What is your visa type?"},
  {label:"Nearest Station" ,name:"sta ", noValueError:"Please tell us your nearest station"},
  {label:"Email" ,name:"email",noValueError:"Email is empty or invalid"}
];

class Form extends Component{


  renderField(){
    return _.map(FIELDS,({label ,name})=>{
      return <Field
      component={FormField}
      type='text'
      label={label}
      name={name}
      key={name}/>
    });
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
      {this.renderField()}
      <Link to="/" className="red btn-flat left white-text" >Cancel</Link>
      <button type='submit' className="teal btn-flat right white-text" >Submit</button>
      </form>
    )
  }

}
  function validate(values){
    const errors={};

    errors.email = validateEmails(values.email || '');
    _.each(FIELDS,({name,noValueError})=>{
      if(!values[name]){
        errors[name]=noValueError;
      }
    })
    return errors;
  };

export default reduxForm({
  validate,
  form:'form'
})(Form);
