const{Router}=require('express')
const router = Router()

router.post('/login', (req,res)=>{
    console.log('resultado' + req.body)
    res.json({
        login:true,
        usuario:'david',
    })
})

module.exports=router