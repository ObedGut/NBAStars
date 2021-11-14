const { Router } = require("express");
const router = Router();


//Routes
router.get('/', (req,res)=>{
    res.json({"Title": "Hello This is my API!"});
});


module.exports = router;