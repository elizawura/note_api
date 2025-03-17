import { User } from "../models/user_model.js";
import { userValidator } from "../validators/validator.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { error, value } = userValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  // console.log("value", value);
  const existingUser = await User.findOne({ email: value.email });
  console.log("existingUser", existingUser);

  if (existingUser) {
    return res.status(409).json({ message: "User already Registered" });
  } else {
    const hashedPassword = await bcrypt.hash(value.password, 12);
    //const newUser = await User.create(
    // ...value,
    //(value.password = hashedPassword)
    //);
    //or
    const newUser = await User.create({
      userName: value.userName,
      email: value.email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "user created successfully",
      data: newUser,
    });
  }
};

export const getUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json({ data: allUsers });
};
