const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from head of the header
  const token = req.header('x-auth-token');

  // Check if not a token
  if (!token) {
    return res.status(401).json({ msg: ' No token, no washy' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecert'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Tokken is not valid' });
  }
};
