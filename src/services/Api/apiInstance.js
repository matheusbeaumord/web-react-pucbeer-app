const API_URL = 'https://pucbeer-api.onrender.com';
const axios = require('axios');

export const instance = axios.create({
  baseURL: API_URL,
});

module.exports = {
  instance,
};
