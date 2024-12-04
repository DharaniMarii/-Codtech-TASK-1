const express = require('express');
const multer = require('multer');
const User = require('../models/User');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('profilePicture'), async (req, res) => {
  const { name, email } = req.body;
  const profilePicture = req.file ? req.file.path : '';

  const newUser = new User({ name, email, profilePicture });
  await newUser.save();

  res.status(201).json(newUser);
});

module.exports = router;
