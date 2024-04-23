const express=require("express")
const router=express.Router()
const menuItems=require("../models/Menu")
router.get("/", async (req, res) => {
    try {
      const data = await menuItems.find();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const menu = new menuItems(data);
      const response = await menu.save();
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send({ err: "Internal Server Error" });
    }
  });



module.exports=router