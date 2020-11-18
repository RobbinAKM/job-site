import axios from 'axios';
import { FETCH_USER ,FETCH_JOBS } from './types';

export const fetchUser = () => async dispatch => {
const res =await axios.get('/api/current_user');
dispatch({type:FETCH_USER , payload:res.data});
}


export const fetchJobs = () => async dispatch => {
const res =await axios.get('/api/jobs');
dispatch({type:FETCH_JOBS , payload:res.data});
}

export const submitForm = values =>{
  return {type:'fetch_formdata'}
}
