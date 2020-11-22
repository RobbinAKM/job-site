const mongoose = require('mongoose');
const Response = mongoose.model('response');


module.exports = app=>{

  app.post('/api/response', async(req,res)=>{
    const {name,jplevel ,visa,sta,email }= req.body;
    const response = new Response({
       name,jplevel ,visa,sta,email
    });
    try{
      await response.save();
      res.send(response);
    }catch(err){
      res.status(422).send(err);
    }
  });

  app.get('/api/response',async (req,res)=>{
    const responses = await Response.find({});
    res.send(responses);
  });
};
