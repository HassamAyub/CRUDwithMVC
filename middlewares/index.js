const fs=require('fs');

async function logReq(filename) {
    return (req,res,next)=>{
        fs.writeFile(filename,`${Date.now()}, method:${req.method}, Path:${req.path}\n`,(err,result)=>{
            console.log('log updated');
            next();
        });
        
    }
}