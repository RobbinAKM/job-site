const mongoose = require('mongoose');
const Job = mongoose.model('jobs');


module.exports = app=>{

  app.post('/api/jobs', async(req,res)=>{
    const {title, wage,distance,jpLevel, img , longitude, latitude }= req.body;
    const job = new Job({
      title,
      wage,
      distance,
      jpLevel,
      img,
      longitude,
      latitude       
    });
    try{
      await job.save();
      res.send(job);
    }catch(err){
      res.status(422).send(err);
    }
  });

  app.get('/api/jobs',async (req,res)=>{
    const jobs = await Job.find({});
    res.send(jobs);
  });
};
