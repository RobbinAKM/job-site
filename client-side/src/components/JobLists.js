import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Img} from 'react-image'
import { fetchJobs } from '../actions';


class JobLists extends Component{

  componentDidMount() {
   this.props.fetchJobs();
  }

  renderJobs(){
    return this.props.jobs.map(job=>{
      return(
        <div className="col s12 m7" key={job.title}>
          <div className="card horizontal">
           <div className="card-image">
              <Img src={job.img} style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"100%"}} />
              </div>
           <div className="card-stacked">
             <div className="card-content">
              <h5>{job.title} </h5><br/>
              <p>Japanese level {job.jpLevel} ~</p>
              <p>{job.wage}</p>
          </div>
          <div className="card-action">
            <a href="https://www.google.com/?hl=ja">For more details and to apply >>></a>
          </div>
          </div>
        </div>
        </div>
         );
    });
  }

  render(){
    return (
      <div>
      {this.renderJobs()}
      </div>
  );
  }
}

function mapStateToProps( {jobs} ){
  return {jobs};
}

export default connect(mapStateToProps,{ fetchJobs })(JobLists);
