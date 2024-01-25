const express=require('express');
const router=express.Router();

const MenuItem = require("./../module/MenuItem")

// GET route to retrieve all menu items
router.get('/', async (req, res) => {
    try {
      const menuItems = await MenuItem.find();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // POST route to add a new menu item
  router.post('/', async (req, res) => {
    try {
      // console.log('Request Body:', req.body); 
      const menuItemData = req.body; // Assuming the request body contains the data for the new menu item
      const newMenuItem = new MenuItem(menuItemData);
      const savedMenuItem = await newMenuItem.save();
      res.status(201).json(savedMenuItem);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/:taste', async (req, res) => {
    try {
      const requestedTaste = req.params.taste;
      
      // Assuming 'taste' is a valid field in your MenuItem model
      const menuItems = await MenuItem.find({ taste: requestedTaste });
  
      if (menuItems.length === 0) {
        res.status(404).json({ error: 'No menu items found for the specified taste' });
      } else {
        res.status(200).json(menuItems);
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  



  module.exports=router;