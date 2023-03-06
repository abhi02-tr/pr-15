const router = require('express').Router();

router.route('/user')
.get(async (req, res) => {
    try{
        res.status(200).json({message:'get'});
    }
    catch(err){
        console.error(err);
    }
});

module.exports = router;