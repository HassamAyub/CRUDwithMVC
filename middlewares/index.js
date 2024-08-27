const fs=require('fs');
const path=require('path')

function logReq(filename) {

    return (req,res,next)=>{
            const fullPath = path.resolve(filename);
            const logdata=`${Date.now()}, method:${req.method}, Path:${req.path}\n`;
            
            fs.appendFile(fullPath,logdata,err=>{
                if(!err){
                    console.log('log updated');
                    next();
                }
                
            });
        }
}

module.exports=logReq;