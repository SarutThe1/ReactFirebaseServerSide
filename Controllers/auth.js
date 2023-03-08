const User = require('../Models/Users')

exports.createAndUpdateUser = async (req, res) => {
  const {name,email} = req.user
  
  const user = await User.findOneAndUpdate(
    {email},
    {name},
    {new:true}
  )
  if(user){
    res.json(user)
  }else{
    const newUser = await User({
      email,
      name
    }).save();
    res.json(newUser)
  }


};


exports.currentUser = async(req,res)=>{
  try{
    const user = await User.findOne({email:req.user.email}).exec()
    res.send(user)
  }catch(err){
    console.log(err)
    res.status(400).send('Server Error')
  }
}