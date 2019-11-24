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
  module.exports = generateResObjArr;