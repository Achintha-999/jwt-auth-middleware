const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth');

router.get('/secret', authenticate, (req, res) => {
  res.json({ 
    message: 'Protected data!',
    user: req.user 
  });
});

module.exports = router;

// This code defines a protected route in an Express.js application.