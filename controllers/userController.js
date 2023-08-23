const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const filterObj = (bodyObject, ...allowedFields) => {
  const newObj = {};

  Object.keys(bodyObject).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = bodyObject[el];
  });

  return newObj;
};
// Controller functions
exports.getAllUsers = catchAsync(async (req, res) => {
  const allUsers = await User.find();

  res.status(200).json({
    status: 'success',
    userCount: allUsers.length,
    data: { allUsers },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'Please use the "/updatePassword" route to update password.',
        400,
      ),
    );
  }

  const filteredUser = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredUser, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'data updated successfully',
    user: updatedUser,
  });
});

exports.addUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
