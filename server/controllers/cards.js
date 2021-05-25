import mongoose from "mongoose";
import CardMessage from "../models/cardMessage.js";

export const getCards = async (req, res) => {
  try {
    const cardMessage = await CardMessage.find();

    res.status(200).json(cardMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCard = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postMessage.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCard = async (req, res) => {
  const card = req.body;
  const newCard = new CardMessage(card);
  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCard = async (req, res) => {
  const { id: _id } = req.params;
  const card = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No card with this id");

  const updatedCard = await CardMessage.findByIdAndUpdate(
    _id,
    { ...card, _id },
    { new: true }
  );

  res.json(updatedCard);
};

export const deleteCard = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No card with this id");

  await CardMessage.findByIdAndRemove(id);

  res.json({ message: "Card deleted successfully" });
};

export const likeCard = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No card with this id");

  const card = await CardMessage.findById(id);
  const updatedCard = await CardMessage.findByIdAndUpdate(
    id,
    {
      likeCount: card.likeCount + 1,
    },
    { new: true }
  );

  res.json(updatedCard);
};
