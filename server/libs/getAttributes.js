function getAttributes(objArr) {
  let resArr = [];
  if (objArr.length == 0) {
    return resArr;
  }

  let obj = objArr[0];
  if (typeof obj !== "object") {
    return resArr;
  }

  for (const attr of Object.keys(obj)) {
    resArr.push(attr);
  }

  return resArr;
}

module.exports = getAttributes;
