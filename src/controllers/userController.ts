import { Request, Response } from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../models/userModel';

export const getUsers = (req: Request, res: Response) => {
  getAllUsers((err: any, results: any) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const addUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  createUser({ name, email }, (err: any, result: any) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, name, email });
  });
};

export const updateUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  updateUser(id, { name, email }, (err: any, result: any) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User updated' });
  });
};

export const deleteUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  deleteUser(id, (err: any) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User deleted' });
  });
};
