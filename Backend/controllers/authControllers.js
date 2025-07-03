const admin = require('../services/firebaseAdmin');

// Register user (create user in Firebase Auth)
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required' });
  }

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      uid: userRecord.uid,
      email: userRecord.email,
      message: 'User registered successfully',
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Verify token (login verification)
exports.loginUser = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: 'Token is required' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return res.status(200).json({
      success: true,
      uid: decodedToken.uid,
      message: 'Token is valid',
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
