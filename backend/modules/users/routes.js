import express from "express";
import generateKeywordController from "./useCase/generateKeywords/controller/index.js";

const router = express.Router();

router.get('/', generateKeywordController.exec)

export default router
