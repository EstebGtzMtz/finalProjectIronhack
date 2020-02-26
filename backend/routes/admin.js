const express = require('express');
const router = express.Router();


router.get('/adminDashboard', (req, res) => {
    res.json({ ok: true, msg: ' jala' })
});

// router.post('/adminDashboard/:id/createCategory', (req, res)=>{
//     req
// })

module.exports = router;