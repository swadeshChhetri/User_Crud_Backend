"use strict";
// import { db } from '../config/db';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
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
const User_1 = require("./User");
// Get all users
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.find({});
});
exports.getAllUsers = getAllUsers;
// Create a user
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.User(userData);
    return yield user.save();
});
exports.createUser = createUser;
// Update user by id
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.findByIdAndUpdate(id, userData, { new: true });
});
exports.updateUser = updateUser;
// Delete user by id
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.findByIdAndDelete(id);
});
exports.deleteUser = deleteUser;
