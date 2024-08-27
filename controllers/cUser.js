const users=require('../models/mUser.js');

async function handleGetallusers(req,res) {
    try {
        const allUsers = await users.find({});
        return res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handlePostNewUser(req,res) {
    const body=req.body;
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

async function handleGetUserByID(req,res) {
    const user = await users.findById(req.params.id);
    if(!user){
        return res.status(400).json({error:"Invaild id"})
    }else{
        return res.status(200).json(user);
    }
}

async function handleUpdateUserbyID(req,res) {
    const body=req.body;
    const id=req.params.id;
    await users.findByIdAndUpdate(id,{
        email:body.email
    }).then(user=>{
        return res.status(200).json({task:"completed",user:user})
    })

}

async function handleDeleteUserbyID(req,res) {
    const user= await users.findByIdAndDelete(req.params.id);
    return res.status(200).json({deletedData:`user delete with data:${user}`})
}



module.exports={
    getAllusers:handleGetallusers,
    postnewUser:handlePostNewUser,
    getuserbyID:handleGetUserByID,
    updateUserbyID:handleUpdateUserbyID,
    deleteUserbyID:handleDeleteUserbyID,
}