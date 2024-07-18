import foodModel from "../models/foodModels.js";

import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    return res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

//list food

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    return res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "error" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, async (err) => {
      if (err) {
        console.log(err);
        return res.json({ success: false, message: "falied to delete" });
      }
    });
    await foodModel.findByIdAndDelete(req.body.id);
    return res.json({ success: true, message: "food removed" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
