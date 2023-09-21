
const express  = require("express");
const router = express.Router();


const {pFeedBack} = require("../controller/create");


router.post("/create",pFeedBack);

module.exports = router;