const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route POST api/users
// @desc Register user
// @access Public

router.post(
  '/',
  [
    check('name', 'Name mofo name')
      .not()
      .isEmpty(),
    check('email', 'email mofo').isEmail(),
    check('password', 'password not 123 mofo').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('User route');
  }
);

module.exports = router;
