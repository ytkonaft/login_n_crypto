const IdsAndByIds = (arr) => {
  const results = {
    arrayIds: [],
    objById: {}
  };
  arr.forEach((itm) => {
    results.arrayIds.push(itm.id);
    results.objById[itm.id] = itm;
  });
  return results;
};

export default IdsAndByIds;
