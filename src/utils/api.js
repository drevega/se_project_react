// src/utils/api.js

const baseUrl = "http://localhost:3001";

// Fetch all clothing items
function getItems() {
  return fetch(`${baseUrl}/items`).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
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
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

//Delete an item
function deleteItem(id) {
    return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
    }).then((res) => 
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
);
}

export { getItems, addItem, deleteItem };
