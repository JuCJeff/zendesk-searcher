let usersJson = require("users.json");
let mongoose = require("mongoose");
let assert = require("assert");

mongoose.connect("mongodb://localhost/zendesk");

let Schema = mongoose.Schema;
let userSchema = new Schema({
  _id: Number,
  url: String,
  external_id: String,
  name: String,
  alias: String,
  created_at: Date,
  active: Boolean,
  verified: Boolean,
  shared: Boolean,
  locale: String,
  timezone: String,
  last_login_at: Date,
  email: String,
  phone: String,
  signature: String,
  organization_id: Number,
  tags: Object,
  suspended: Boolean,
  role: String
});

let User = mongoose.model('User', userSchema);
User.collection.insertMany(usersJson, function(err, r) {
    assert.equal(null, err);
    assert.equal(75, r.insertedCount);

    db.close();
})