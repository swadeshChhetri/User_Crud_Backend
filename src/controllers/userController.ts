import { Request, Response, NextFunction } from 'express';
import * as userModel from '../models/userModel';

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err: any) {
    next(err);
  }
};

export const addUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json({ error: 'Name and email are required' });
      return;
    }
    const newUser = await userModel.createUser({ name, email });
    res.status(201).json(newUser);
  } catch (err: any) {
    next(err);
  }
};

export const updateUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const updatedUser = await userModel.updateUser(id, { name, email });
    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json({ message: 'User updated', user: updatedUser });
  } catch (err: any) {
    next(err);
  }
};

export const deleteUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const deletedUser = await userModel.deleteUser(id);
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json({ message: 'User deleted' });
  } catch (err: any) {
    next(err);
  }
};
