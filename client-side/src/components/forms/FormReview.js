import React from 'react';
import {connect} from 'react-redux'
import fields from './fields';
import _ from 'lodash';
import * as actions from '../../actions'

const FormReview= ({onCancel, formValues, submitForm})=>{

  const reviewFields= _.map(fields,({label,name})=>
      {
        return (
          <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
          </div>
        );
      }
    )

  return(
    <div>
      <h5>review your form before submitting</h5>
      <div style={{margin:"30px"}}>{reviewFields}</div>
      <button onClick={onCancel} className="yellow darken-3 btn-flat" > Back </button>
      <button
        className="green btn-flat right white-text"
        onClick={()=>submitForm(formValues)}
      >
        Send >>
      </button>
  </div>
  );
};

function mapStateToProps(state){

  return{
    formValues:state.form.jobForm.values
  };
}
export default connect(mapStateToProps,actions)(FormReview);
