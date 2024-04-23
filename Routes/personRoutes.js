const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.get("/", async (req, res) => {
  try {
    let data = await Person.find();
    console.log("Data fetched Successfully");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ err: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const data = req.params.workType;
    if (data == "chef" || data == "manager" || data == "waiter") {
      const response = await Person.find({ work: data });
      res.status(200).send(response);
    } else {
      res.status(404).send("Invalid work type");
    }
  } catch (err) {
    res.status(500).send({ err: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("Saved Successfully", response);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error Saving Person", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const response = await Person.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).send({ error: "Person Not found" });
    }
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ err: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Person.findByIdAndDelete(id)
    console.log(id);
    if (!response) {
      return res.status(404).json({ error: "Data Not Found" });
    }
    res.status(200).json({ message: "Person deleted Successfully" });
  } catch (err) {

    console.log(err)
    res.status(500).json({ err: "Internal Server Error" });
  }
});

module.exports = router;
