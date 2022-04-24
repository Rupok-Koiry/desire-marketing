const mongoose = require('mongoose');
//Blog document schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A blog must have a title'],
    trim: true,
  },

  category: {
    type: String,
    trim: true,
    required: [true, 'A blog must have a category'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A blog must have a description'],
  },
  imageCover: {
    type: String,
    required: [true, 'A blog must have a cover image'],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A blog must have a author'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
blogSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'author',
  });
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
