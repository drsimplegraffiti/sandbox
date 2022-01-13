import express from 'express';
const router = express.Router();

import {
    getAllUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser
} from '../controllers/users.js';



router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getSingleUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);


export default router;