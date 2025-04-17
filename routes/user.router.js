const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.post('/registration', UserController.register);
router.post('/login', UserController.login);
// Test route để kiểm tra kết nối
router.get('/', (req, res) => {
    console.log('GET /');
    res.send('Hello from router!');
  });

module.exports = router;