import User from "../models/UserModel.js"


export const getUser =  async(req, res)=>{
    const {username , password} = req.body;
    if(!username || ! password){
      res.status(400);
    }
  const user = await User.findOne({username})
  
  res.status(200).send(user)
    }

    export const createUser = (req,res)=>{
      
      User.create({username :req.body.username ,password : req.body.password,phone : req.body.phone}) // Pass user directly without wrapping it inside an object
      .then((data) =>{
          console.log('saved successfully....');
          res.status(201).send(data);
      })
      .catch((err)=>{
          console.log(err);
          res.send({error: err, msg: 'something went wrong'})
      })};
export const updateUser = (req,res)=>{
    
} 

export const deleteUser = (req,res)=>{
   
} 