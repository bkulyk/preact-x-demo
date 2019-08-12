const zipObj = (keys, values) => {
  const len = Math.min(keys.length, values.length);
  const out = {};
  let idx = 0;
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
};

const fixOptions = objOrArr => (
  Array.isArray(objOrArr)
    ? zipObj(objOrArr, objOrArr)
    : objOrArr
);

export default fixOptions;
