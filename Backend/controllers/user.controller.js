import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";


const getUsers = async (request, response, next) => {
  try {
    //find all documents
    const users = await User.find({});

    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUser = async (request, response, next) => {
  try {
    const id = request.params.id;
    const userFound = await User.findById(id);
    if (!userFound) {
      return response.status(404).end();
    }
    response.status(200).json(userFound);
  } catch (error) {
    next(error);
  }
};

//el create esta enlazado con el POST
const createUser = async (request, response, next) => {
  try {
    const userProps = request.body;
    const newUser = new User(userProps);
    await newUser.save();
    // or
    // await User.create(userProps);

    response.status(201).end();
  } catch (error) {
    next(error);
  }
};

const updateUser = async (request, response, next) => {
  try {
    const id = request.params.id;
    const userNewProps = request.body;
    const updateUser = await User.findByIdAndUpdate(id, userNewProps, {
      new: true,
    }).exec();

    response.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (request, response, next) => {
  try {
    const id = request.params.id;
    const deleteUser = User.findByIdAndRemove(id).exec();

    if (!deleteUser) {
      response.status(404).end();
    }

    response.status(204).json(deleteUser);
    // response.status(200).end(result);
  } catch (error) {
    next(error);
  }
};

const login = async (request, response, next) => {
  const {email, password} = request.body

  const data = {email, password,};

  jwt.sign(data, 'pancito', (err, token)=> {
    if (err) {
      next(err);
    } else {
      response.json({ msg: "Create token", token: token });
    }
  })
}

const uploadAvatar = async (request, response, next) => {
  console.log(request.body);
  const id = request.params.id;

  const img = `http://localhost:3000/${request.file.path}`;

  const userNewProps = {
    avatar: img,
  };

  const updatedUser = await User.findByIdAndUpdate(id, userNewProps, {
    new: true,
  }).exec();

  response.json(updatedUser);
};

export { getUsers, getUser, createUser , updateUser, deleteUser, login, uploadAvatar};
