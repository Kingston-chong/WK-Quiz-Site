import express from 'express';
import { createQuestion, deleteQuestion, viewQuestion, updateQuestion, viewAllQuestion } from '../controller/question.controller.js';

const router  = express.Router(); 

router.post('/',createQuestion);
router.put('/:id',updateQuestion);
router.get('/:id',viewQuestion);
router.get('/',viewAllQuestion);
router.delete('/:id',deleteQuestion);

export default router;