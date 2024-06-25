const router=require('express').Router()
const cApi=require('../controler/controler')

router.post('/reg',cApi.reg)

router.get('/regFind',cApi.regFind)




module.exports=router