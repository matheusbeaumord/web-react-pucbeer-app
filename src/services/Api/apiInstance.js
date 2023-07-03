const API = process.env.REACT_APP_API_URL;

const axios = require('axios');

const instance = axios.create({
  baseURL: API,
});

module.exports = {
  instance,
};
