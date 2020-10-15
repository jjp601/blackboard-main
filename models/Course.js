const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: false
  },
  term: {
    type: String,
    required: false
  },
  assignment1: {
    type: String,
    required: false
  },
  assignment2: {
    type: String,
    required: false
  },
  assignment3: {
    type: String,
    required: false
  },
  assignment4: {
    type: String,
    required: false
  },
  assignment5: {
    type: String,
    required: false
  },
  quiz1: {
    type: String,
    required: false
  },
  quiz2: {
    type: String,
    required: false
  },
  quiz3: {
    type: String,
    required: false
  },
  quiz4: {
    type: String,
    required: false
  },
  quiz5: {
    type: String,
    required: false
  },
  midterm: {
    type: String,
    required: false
  },
  final: {
    type: String,
    required: false
  },
  project: {
    type: String,
    required: false
  },
  video1: {
    type: String,
    required: false
  },
  video2: {
    type: String,
    required: false
  },
  video3: {
    type: String,
    required: false
  },
  video4: {
    type: String,
    required: false
  },
  video5: {
    type: String,
    required: false
  },
  video6: {
    type: String,
    required: false
  },
  video7: {
    type: String,
    required: false
  },
  video8: {
    type: String,
    required: false
  },
  video9: {
    type: String,
    required: false
  },
  video10: {
    type: String,
    required: false
  },
  video11: {
    type: String,
    required: false
  },
  video12: {
    type: String,
    required: false
  },
  video13: {
    type: String,
    required: false
  },
  video14: {
    type: String,
    required: false
  },
  video15: {
    type: String,
    required: false
  },
  video16: {
    type: String,
    required: false
  },
  video17: {
    type: String,
    required: false
  },
  video18: {
    type: String,
    required: false
  },
  video19: {
    type: String,
    required: false
  },
  video20: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  office: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('course', CourseSchema);
