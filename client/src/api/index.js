import axios from "axios";

const url = "http://localhost:5000/cards";

export const fetchCards = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const likeCard = (id) => axios.patch(`${url}/${id}/likeCard`);
export const updateCard = (id, updateCard) =>
  axios.patch(`${url}/${id}`, updateCard);
export const deleteCard = (id) => axios.delete(`${url}/${id}`);
