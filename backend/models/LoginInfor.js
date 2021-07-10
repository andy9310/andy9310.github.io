const mongoose = require("mongoose");

const LoginInforSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  password: String,
  logincount: Number,
  /*title: String,
  intro: String, //short intro, one sentence maybe
  detail_intro: String,
  ig_followers: String,
  ig_link: String,
  fb_link: String,
  tw_link: String,
  pictures: [String],
  clickCnt: {
    type: Number,
    default: 0,
  },
  showCnt: {
    type: Number,
    default: 0,
  },
  rate: {
    type: Number,
    defaut: 0,
  },*/
});

const loginInfor = mongoose.model('LoginInfor', LoginInforSchema)
module.exports = loginInfor