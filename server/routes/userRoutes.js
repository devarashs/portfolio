import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";
import dotenv from "dotenv";
import { passwordValidator } from "../validators/inputValidators.js";
import asyncWrapper from "../wrapper/asyncWrapper.js";

dotenv.config();

const userRouter = express.Router();

userRouter.post(
  "/signin",
  asyncWrapper(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(201).send({
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Email or Password is Wrong!" });
  })
);

userRouter.post(
  "/signup",
  asyncWrapper(async (req, res) => {
    const SignupFormValues = req.body;

    const validatePassword = passwordValidator.parse(SignupFormValues.password);

    if (!validatePassword)
      return res.status(400).json({
        message: validatePassword,
      });

    const newUser = new User({
      username: SignupFormValues.username,
      email: SignupFormValues.email,
      password: bcrypt.hashSync(SignupFormValues.password, 8),
    });
    const user = await newUser.save();
    res.status(201).send({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

export default userRouter;
