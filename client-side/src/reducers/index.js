import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jobReducer from './jobReducer';
import {reducer as reduxForm } from 'redux-form';

export default combineReducers({
auth:authReducer,
jobs:jobReducer,
form:reduxForm
});
