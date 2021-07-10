const mongoose = require("mongoose");

const BoardMessegeSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  body: {
    type: String,
    required: [true, 'Body field is required.']
  }
  //password: String,
  //logincount: Number,
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

const boardmessege = mongoose.model('LoginInfor', BoardMessegeSchema)
module.exports = boardmessege