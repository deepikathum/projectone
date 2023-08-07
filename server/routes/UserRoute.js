import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/UserController.js';

const router= express.Router();

router.get('/get', getUser);
router.post('/create',createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser)

export default router;