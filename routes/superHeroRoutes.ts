import express from 'express';
import { addSuperHeroController, deleteSuperHeroController, getAllSuperHeroController, updateSuperHeroController } from '../controllers/superheroController';

const router = express.Router();

router.get('/', getAllSuperHeroController);
router.post('/', addSuperHeroController);
router.delete('/:id', deleteSuperHeroController);
router.put('/:id', updateSuperHeroController);

export default router;