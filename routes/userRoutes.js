const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authenticationController');

// Route handlers
router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router
  .route('/me')
  .get(authController.protect, userController.getMe, userController.getUser);

router.route('/forgotPassword').post(authController.forgotPassword);
router.route('/resetPassword/:token').patch(authController.resetPassword);
router
  .route('/updatePassword')
  .patch(authController.protect, authController.resetPassword);

router
  .route('/updateUserData')
  .patch(authController.protect, userController.updateMe);
router
  .route('/deleteUser')
  .delete(authController.protect, userController.deleteMe);

router.route('/').get(userController.getAllUsers).post(userController.addUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// Export module
module.exports = router;
