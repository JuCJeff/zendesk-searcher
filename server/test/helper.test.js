const generateResObjArr = require("../libs/helper");

test("an empty array of base input results in an empty array", () => {
  expect(generateResObjArr([], "_id", 1)).toEqual([]);
});

test("one matching results with only string values in object", () => {
  let onlyStringValueObject = [
    { name: "test", tag: "a" },
    { name: "test2", tag: "b" }
  ];
  expect(generateResObjArr(onlyStringValueObject, "name", "test")).toEqual([
    { name: "test", tag: "a" }
  ]);
});

test("two matching results with only string values in object", () => {
  let onlyStringValueObject = [
    { name: "test", tag: "a" },
    { name: "test2", tag: "a" }
  ];
  expect(generateResObjArr(onlyStringValueObject, "tag", "a")).toEqual([
    { name: "test", tag: "a" },
    { name: "test2", tag: "a" }
  ]);
});

test("matching results with number values in object", () => {
  let onlyStringValueObject = [
    { _id: 1, tag: "a" },
    { _id: 2, tag: "a" }
  ];
  expect(generateResObjArr(onlyStringValueObject, "_id", 1)).toEqual([
    { _id: 1, tag: "a" }
  ]);
});

test("matching results with boolean values in object", () => {
  let onlyStringValueObject = [
    { _id: 1, verified: true },
    { _id: 2, verified: false }
  ];
  expect(generateResObjArr(onlyStringValueObject, "verified", "true")).toEqual([
    { _id: 1, verified: true }
  ]);
});

test("matching results with within array in object", () => {
  let onlyStringValueObject = [
    { _id: 1, tags: ["a", "b"] },
    { _id: 2, tags: ["a", "c"] }
  ];
  expect(generateResObjArr(onlyStringValueObject, "tags", "a")).toEqual([
    { _id: 1, tags: ["a", "b"] },
    { _id: 2, tags: ["a", "c"] }
  ]);
});
