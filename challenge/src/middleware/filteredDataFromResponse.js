const { StatusCodes } = require('http-status-codes');
const { filterData, axiosGetConnection } = require('../utils/functions');

const filteredDataFromResponse = async (_req, res, next) => {
  try {
    const data = await axiosGetConnection();
    const response = filterData(data);
    res.status(StatusCodes.OK).json({ ...response });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  filteredDataFromResponse,
};
