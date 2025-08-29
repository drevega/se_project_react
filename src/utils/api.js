const baseUrl = "http://localhost:3001";

// helper function to process responses
function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

// GET all clothing items (public)
function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

// POST new item (protected)
function addItem({ name, imageUrl, weather }, token) {
  // add token parameter
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`, // authorization header
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
}

// DELETE an item (protected)
function deleteItem(id, token) {
  // add token parameter
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`, // add authorization header
    },
  }).then(checkResponse);
}

// PATCH  /users/me - to update user info (protected)
function updateUserProfile({ name, avatar }, token) {
  // add token parameter
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`, // add authorization header
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
}

// PUT - /items/:id/like - to add a like
function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

// DELETE - /items/:id/like - to remove a like
function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export {
  getItems,
  addItem,
  deleteItem,
  checkResponse,
  updateUserProfile,
  addCardLike,
  removeCardLike,
};
