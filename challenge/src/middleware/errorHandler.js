module.exports = (_error, _req, res, _next) => {
  res.status(500).json({ message: 'Internal Server Error' });
};
