import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/*REGISTER USER*/
export const register = async (req, res) => {
  try {
    const { firsteName, lastName, email, password, pucturePath, friends, location, occupation } =
      req.body;
      const salt = await bcrypt.genSalt() 
      const passwordHash = 
  } catch (error) {}
};
