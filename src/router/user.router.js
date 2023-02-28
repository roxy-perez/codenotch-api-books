const router = require('express').Router();
const userController = require('../controller/user.controller');

router.get('/users', userController.getUsers);
router.get('/users/:user_id', userController.getUser);
router.post('/users', userController.createUser);
router.put('/users', userController.updateUser);
router.delete('/users', userController.deleteUser);

router.post('/login', userController.loginUser);

module.exports = router;