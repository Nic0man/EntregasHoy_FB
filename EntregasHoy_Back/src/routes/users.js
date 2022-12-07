const{Router}=require('express')
const router = Router()

router.post('/login', (req,res)=>{
    console.log('resultado' + req.body)
    res.json({
        login:true,
        usuario:'david',
    })
})

router.get('/',(req,res)=>{
    res.json({
        message:'ok'
    })
})

module.exports=router