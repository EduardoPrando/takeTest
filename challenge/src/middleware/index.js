const { filterData, axiosGetConnection } = require('../utils/functions');
const { success } = require('../utils/dictionary/statusCode');

const responseFromGithub = async (_req, res, next) => {
  try {
    const data = await axiosGetConnection();
    const response = filterData(data);
    res.status(success).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  responseFromGithub,
};
