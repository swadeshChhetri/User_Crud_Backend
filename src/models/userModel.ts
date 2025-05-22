// import { db } from '../config/db';

// export const getAllUsers = (callback: Function) => {
//   db.query('SELECT * FROM users', (err, results) => callback(err, results));
// };

// export const createUser = (user: { name: string; email: string }, callback: Function) => {
//   db.query('INSERT INTO users SET ?', user, (err, results) => callback(err, results));
// };

// export const updateUser = (id: number, user: { name: string; email: string }, callback: Function) => {
//   db.query('UPDATE users SET ? WHERE id = ?', [user, id], (err, results) => callback(err, results));
// };

// export const deleteUser = (id: number, callback: Function) => {
//   db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => callback(err, results));
// };

import { User, IUser } from './User';

// Get all users
export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find({});
};

// Create a user
export const createUser = async (userData: { name: string; email: string }): Promise<IUser> => {
  const user = new User(userData);
  return await user.save();
};

// Update user by id
export const updateUser = async (id: string, userData: { name?: string; email?: string }): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

// Delete user by id
export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};

