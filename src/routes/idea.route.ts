import { Router } from "express"
import { createIdeaController, getIdeasController } from "../controllers/idea.controller"

const router = Router();

router.post('/', createIdeaController);
router.get('/', getIdeasController);

export default router;