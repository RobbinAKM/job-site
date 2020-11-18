import React, { Component } from 'react';
import {reduxForm , Field} from 'redux-form';
import {Link} from 'react-router-dom';
import FormField from './FormField';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';
import fields from './fields';



class Form extends Component{
  renderField(){
    return _.map(fields,({label ,name})=>{
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
      <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
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
    _.each(fields,({name,noValueError})=>{
      if(!values[name]){
        errors[name]=noValueError;
      }
    })
    return errors;
  };

export default reduxForm({
  validate,
  form:'jobForm',
  destroyOnUnmount: false
})(Form);
