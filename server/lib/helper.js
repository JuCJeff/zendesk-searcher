function generateResObjArr(base, term, value) {
  let resObjArr = [];
  for (const entry of base) {
    if (
      (typeof entry[term] === "string" && entry[term] === value) ||
      (typeof entry[term] === "number" && entry[term] == Number(value)) ||
      (typeof entry[term] === "boolean" &&
        entry[term].toString() === value.toLowerCase()) ||
      (typeof entry[term] === "object" && entry[term].includes(value))
    ) {
      resObjArr.push(entry);
    }
  }

  return resObjArr;
}

function getAttributes(objArr) {
  let resArr = [];
  if (objArr == null || objArr.length == 0) {
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

module.exports.generateResObjArr = generateResObjArr;
module.exports.getAttributes = getAttributes;
