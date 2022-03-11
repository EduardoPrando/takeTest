const axios = require('axios');

const { GITHUB_URD } = require('../dictionary/usedURL');

const filterData = (data) => {
  const takeFiles = data.filter(({ language }) => language === 'C#');
  const slicedResponse = takeFiles.slice(0, 5);
  const onlyRequestedResponseItems = slicedResponse.map((response) => ({
    title: response.name,
    subtitle: response.description,
    image: response.owner.avatar_url,
  }));

  return onlyRequestedResponseItems;
};

const axiosGetConnection = async () => {
  const { data } = await axios.get(`${GITHUB_URD}/repos?per_page=100&sort=created&direction=asc`);
  return data;
};

module.exports = {
  filterData,
  axiosGetConnection,
};
