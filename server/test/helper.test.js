const helper = require("../libs/helper");

test("an empty array of base input results in an empty array", () => {
  expect(helper.generateResObjArr([], "_id", 1)).toEqual([]);
});

test("one matching results with only string values in object", () => {
  let onlyStringValueObject = [
    { name: "test", tag: "a" },
    { name: "test2", tag: "b" }
  ];
  expect(
    helper.generateResObjArr(onlyStringValueObject, "name", "test")
  ).toEqual([{ name: "test", tag: "a" }]);
});

test("two matching results with only string values in object", () => {
  let onlyStringValueObject = [
    { name: "test", tag: "a" },
    { name: "test2", tag: "a" }
  ];
  expect(helper.generateResObjArr(onlyStringValueObject, "tag", "a")).toEqual([
    { name: "test", tag: "a" },
    { name: "test2", tag: "a" }
  ]);
});

test("matching results with number values in object", () => {
  let onlyStringValueObject = [
    { _id: 1, tag: "a" },
    { _id: 2, tag: "a" }
  ];
  expect(helper.generateResObjArr(onlyStringValueObject, "_id", 1)).toEqual([
    { _id: 1, tag: "a" }
  ]);
});

test("matching results with boolean values in object", () => {
  let onlyStringValueObject = [
    { _id: 1, verified: true },
    { _id: 2, verified: false }
  ];
  expect(
    helper.generateResObjArr(onlyStringValueObject, "verified", "true")
  ).toEqual([{ _id: 1, verified: true }]);
});

test("matching results with within array in object", () => {
  let onlyStringValueObject = [
    { _id: 1, tags: ["a", "b"] },
    { _id: 2, tags: ["a", "c"] }
  ];
  expect(helper.generateResObjArr(onlyStringValueObject, "tags", "a")).toEqual([
    { _id: 1, tags: ["a", "b"] },
    { _id: 2, tags: ["a", "c"] }
  ]);
});

test("matching empty results in value", () => {
  let onlyStringValueObject = [
    { _id: 1, description: "" },
    { _id: 2, description: "hello" }
  ];
  expect(
    helper.generateResObjArr(onlyStringValueObject, "description", "")
  ).toEqual([{ _id: 1, description: "" }]);
});
