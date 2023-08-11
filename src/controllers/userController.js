const { User } = require('@src/models');
const { responseError, responseSuccess } = require("@src/utils/output");
const ApiErrorException = require("@src/exceptions/api-error.exception");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    return responseSuccess(res, users);
  } catch (error) {
    console.log(error)
    return responseError(res, error);
  }
}

const createUsers = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      birthday,
      location
    } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      birthday,
      locationId: location
    });

    const data = {
      ...user.toJSON(),
      location: location,
    }

    return responseSuccess(res, data);
  } catch (error) {
    console.log(error)
    return responseError(res, error);
  }
}

const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      birthday,
      location
    } = req.body;

    const user = await User.findOne({ where: { id } });
    if (!user) throw new ApiErrorException('User not found!', 400);

    user.update({
      firstName,
      lastName,
      email,
      birthday,
      locationId: location
    })

    await user.save();

    const data = {
      ...user.toJSON(),
      location: location,
    }

    return responseSuccess(res, data);
  } catch (error) {
    console.log(error)
    return responseError(res, error);
  }
}

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if (user) {
      await user.destroy();
    }

    return responseSuccess(res, { message: "Successfully!" });
  } catch (error) {
    return responseError(res, error);
  }
}

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};