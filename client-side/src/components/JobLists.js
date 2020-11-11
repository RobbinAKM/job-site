import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import {Img} from 'react-image'
import { fetchJobs } from '../actions';
import * as geolib from 'geolib';

class JobLists extends Component{

  componentDidMount() {
   this.props.fetchJobs();
   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(
     (position) => {
      this.setState({
        latitude: position.coords.latitude ,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    (error) => this.setState({ error: "geolocation is disabled" }),
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 },
    );
   }
  }

  renderJobs(){
    return this.props.jobs.map(job=>{
       let dist = geolib.getPreciseDistance(
          { latitude:this.state.latitude || job.latitude, longitude:this.state.longitude || job.longitude },
          { latitude:job.latitude, longitude:job.longitude}
          );
      return(
        <div className="col s12 m7">
          <div className="card horizontal">
           <div className="card-image">
              <Img src={job.img} style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"100%"}} />
              </div>
           <div className="card-stacked">
             <div className="card-content">
              <h5>{job.title} </h5><br/>
              <p>Japanese level {job.jpLevel} ~</p>
              <p>{job.wage}</p>
              <p>{job.distance}</p><br/>
              <p>{Math.ceil(dist*0.001)} kilometers away from your place</p>
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
  <ErrorBoundary>
      <div>
      {this.renderJobs()}
      </div>
  </ErrorBoundary>

  );
  }
}

function mapStateToProps( {jobs} ){
  return {jobs};
}

export default connect(mapStateToProps,{ fetchJobs })(JobLists);
