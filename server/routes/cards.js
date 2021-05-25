import express from "express";

import {
  getCards,
  createCard,
  getCard,
  updateCard,
  deleteCard,
  likeCard,
} from "../controllers/cards.js";

const router = express.Router();

router.get("/", getCards);
router.post("/", createCard);
router.patch("/:id", updateCard);
router.delete("/:id", deleteCard);
router.patch("/:id/likeCard", likeCard);

export default router;
