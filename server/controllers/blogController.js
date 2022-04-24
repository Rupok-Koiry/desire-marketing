const multer = require('multer');
const sharp = require('sharp');
const Blog = require('../models/blogModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const handlerFactory = require('./handlerFactory');

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadBlogImageCover = upload.single('imageCover');

exports.resizeBlogImageCover = catchAsync(async (req, _, next) => {
  if (!req.file) return next();
  req.file.filename = `blog-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(800, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/uploads/blogImages/${req.file.filename}`);

  next();
});

exports.getAllBlogs = handlerFactory.getAll(Blog);

exports.getBlog = handlerFactory.getOne(Blog);

exports.createBlog = handlerFactory.createOne(Blog);

exports.updateBlog = handlerFactory.updateOne(Blog);

exports.deleteBlog = handlerFactory.deleteOne(Blog);
