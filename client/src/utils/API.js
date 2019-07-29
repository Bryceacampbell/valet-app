import axios from "axios";

export default {
  getRequests: function () {
    return axios.get("/api/admin/requests");
  },
  getRequest: function (id) {
    return axios.get("/api/admin/requests/" + id);
  },
  updateRequest: function (requestData) {
    return axios.put("/api/admin/requests/", requestData)
  },
  getAllCustomers: function () {
    console.log("Ajax called being made");
    return axios.get("/api/admin/customers");
  },
  //============Calls From Customer=============
  findClientAssets: function(id){
    console.log("Ajax call called via Assets axios Util/API.js");
    return axios.get("/api/assets/findassets/" + id);
  },
  makeRequest: function (pickupData) {
    console.log("Ajax pickup request made");
    return axios.put("/api/assets/pickup", pickupData);
  },
  // ===========Calls From Customer[END]=======
  //===========================================
  // =====================BOOKS!===============
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
