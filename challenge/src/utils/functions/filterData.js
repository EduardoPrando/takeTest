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

module.exports = filterData;
