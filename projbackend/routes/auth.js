var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout,signup,signin, isSignedIn} = require("../controllers/auth");

router.post("/signup",[
    check("name", "name should be at least 3 Character").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be atleast 3 char").isLength({min:3}),
], signup);

router.post("/signin",[
    check("email", "Email is required").isEmail(),
    check("password", "Password Feild is Required.").isLength({min:3}),
], signin);


router.get("/signout", signout);

router.get("/testroute",isSignedIn, (req, res)=> {
    res.send(req.auth);
});



module.exports = router ;