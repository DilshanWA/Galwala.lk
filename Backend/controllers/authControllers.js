// Handles login logic
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Dummy auth check
  if (email === 'admin@test.com' && password === '123456') {
    return res.json({ success: true, token: 'mock_jwt_token' });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
};
