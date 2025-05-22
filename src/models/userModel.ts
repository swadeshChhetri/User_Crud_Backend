import { db } from '../config/db';

export const getAllUsers = (callback: Function) => {
  db.query('SELECT * FROM users', (err, results) => callback(err, results));
};

export const createUser = (user: { name: string; email: string }, callback: Function) => {
  db.query('INSERT INTO users SET ?', user, (err, results) => callback(err, results));
};

export const updateUser = (id: number, user: { name: string; email: string }, callback: Function) => {
  db.query('UPDATE users SET ? WHERE id = ?', [user, id], (err, results) => callback(err, results));
};

export const deleteUser = (id: number, callback: Function) => {
  db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => callback(err, results));
};
