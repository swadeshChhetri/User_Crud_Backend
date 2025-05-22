import express from 'express';
import {
  getUsers,
  addUser,
  updateUserById,
  deleteUserById
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;
