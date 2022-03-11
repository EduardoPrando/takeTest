const axios = require('axios');

const { GITHUB_URD } = require('../utils/dictionary/usedURL');
const { success } = require('../utils/dictionary/statusCode');

const filterData = (data) => {
  const takeFiles = data.filter(({ language }) => language === 'C#');
  return takeFiles;
};

const responseFromGithub = async (req, res, next) => {
  try {
    const { data } = await axios.get(`${GITHUB_URD}/repos?per_page=100&sort=created&direction=asc`);
    const response = filterData(data);
    res.status(success).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  responseFromGithub,
};
