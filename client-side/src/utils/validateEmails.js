const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default email =>{
  const invalidEmails = re.test(email)=== false;
  if(invalidEmails){
    return "The email is invalid"
  }
  return ;
};
