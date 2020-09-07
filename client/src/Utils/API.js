import axios from "axios";

export default {
  // Gets all books
  getItems: function () {
    return axios.get("/api/items");
  },
  // Gets the book with the given id
  getItem: function (id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function (id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a book to the database
  saveItem: function (bookData) {
    return axios.post("/api/items", bookData);
  },
  // Gets all books
  getStats: function () {
    return axios.get("/api/stats");
  },
  // Gets the book with the given id
  getStat: function (id) {
    return axios.get("/api/stats/" + id);
  },
  // Deletes the book with the given id
  deleteStat: function (id) {
    return axios.delete("/api/stats/" + id);
  },
  // Saves a book to the database
  saveStat: function (bookData) {
    return axios.post("/api/stats", bookData);
  },
  // Gets all books
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function (bookData) {
    return axios.post("/api/user", bookData);
  }
};
