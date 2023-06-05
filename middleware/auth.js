const teacherAuth= async (req,res,next)=>
{
    try{
        
        const tc=req.cookies.teacherLogedIn
        if(tc=="True")
        {
            next()
        }
        
        
    }
    catch(error)
    {
        res.status(401).send(error)
    }
}
module.exports=
{
    teacherAuth
}

