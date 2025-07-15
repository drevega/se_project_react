// src/utils/api.js

const baseUrl = "http://localhost:3001";

function checkResponce(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

// GET all clothing items
function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponce);
}

//POST new item
function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponce);
}

//Delete an item
function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponce);
}

export { getItems, addItem, deleteItem };
