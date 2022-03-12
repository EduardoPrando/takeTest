const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com/orgs/takenet',
});

const axiosGetConnection = async () => {
  const { data } = await api.get('/repos?per_page=100&sort=created&direction=asc');
  return data;
};

module.exports = axiosGetConnection;
