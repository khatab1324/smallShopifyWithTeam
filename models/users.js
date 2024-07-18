const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new Schema({
  phoneNumber: String,
  store: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  websiteurl: String,
  githubAccount: String,
  twitterAccount: String,
  instagramAccount: String,
  facebookAccount: String,
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
