const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]; 
  
    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.userId = decoded.userId; 
      next();
    } catch (error) {
      res.status(401).json({ error: 'Token inválido' });
    }
  }

module.exports = authMiddleware;