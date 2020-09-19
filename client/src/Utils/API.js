import axios from "axios";

export default {
  // Gets all books
  getItems: function () {
    return axios.get("/api/items");
    // return JSON.parse(localStorage.getItem("statItem"));
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
  saveItem: function (itemData) {
    return axios.post("/api/items", itemData);
    // localStorage.setItem("useritems", JSON.stringify(statItem));
  },
  // Gets all books
  getStats: function () {
    return axios.get("/api/stats");
  },
  // Gets the book with the given id
  getStat: function () {
    return axios.get("/api/stats/");
    // return JSON.parse(localStorage.getItem("userstats"));
  },
  // Deletes the book with the given id
  deleteStat: function (id) {
    return axios.delete("/api/stats/" + id);
  },
  // Saves a book to the database
  saveStat: function (statData) {
    localStorage.setItem("userstats", JSON.stringify(statData));
  //  localStorage.getItem("id")
    console.log(statData)
    return axios.put("/api/stats/", statData);
  },
  // Gets all users
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },

  login: function (credentials) {
    return axios.post("/api/login", credentials)
  },

  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function (saveData) {
    return axios.post("/api/user", saveData);
  }

};
