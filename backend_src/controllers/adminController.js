const db = require('../models/db2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Registration
exports.register = (req, res) => {
  const { fullname, authorizationid, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const query = 'INSERT INTO users (fullname, authorizationid, email, password) VALUES (?, ?, ?, ?)';
  db.query(query, [fullname, authorizationid, email, hashedPassword], (err) => {
    if (err) return res.status(500).json({ error: 'User already exists or database error' });
    res.status(201).json({ message: 'User registered successfully' });
  });
};


// User Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log("Email received:", email);
  console.log("Password received:", password);
  
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  });
};
