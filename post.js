const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  content: String,
  comments: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      text: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
