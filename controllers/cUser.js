// 
const users=require('../models/mUser.js');

async function handleGetallusers(req,res) {
    const user= await users.find({});
    return res.status(200).json(user)
}

async function handlePostNewUser(req,res) {
    if(!body || !body.fullName || !body.email || !body.gender || !body.jobTitle){
        return res.status(400).json({error:' data incomplete', recData:body})
    }else{
        const body=req.body;
            const newUser= new users({
                fullName:body.fullName,
                email:body.email,
                gender:body.gender,
                jobTitle:body.jobTitle,
            })
            const user=await newUser.save();
            return res.status(201).json({task:"new user add",details:user})
    }
}

module.exports={
    getAllusers:handleGetallusers,
    postnewUser:handlePostNewUser,
}