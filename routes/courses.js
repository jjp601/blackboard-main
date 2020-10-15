const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');

const User = require('../models/User');
const Course = require('../models/Course');

// @route     GET api/courses
// @desc      Get all users courses
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const courses = await Course.find({user: req.user.id}).sort({
      date: -1,
    });
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/courses
// @desc      Add new course
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {name,instructor,
      term,
      assignment1,
      assignment2,
      assignment3,
      assignment4,
      assignment5,
      quiz1,
      quiz2,
      quiz3,
      quiz4,
      quiz5,
      midterm,
      final,
      project,
      video1,
      video2,
      video3,
      video4,
      video5,
      video6,
      video7,
      video8,
      video9,
      video10,
      video11,
      video12,
      video13,
      video14,
      video15,
      video16,
      video17,
      video18,
      video19,
      video20, photo, title, office, email, phone} = req.body;

    try {
      const newCourse = new Course({
        name,
        instructor,
        term,
        assignment1,
        assignment2,
        assignment3,
        assignment4,
        assignment5,
        quiz1,
        quiz2,
        quiz3,
        quiz4,
        quiz5,
        midterm,
        final,
        project,
        video1,
        video2,
        video3,
        video4,
        video5,
        video6,
        video7,
        video8,
        video9,
        video10,
        video11,
        video12,
        video13,
        video14,
        video15,
        video16,
        video17,
        video18,
        video19,
        video20,
        photo,
        title,
        office,
        email,
        phone,
        user: req.user.id,
      });

      const course = await newCourse.save();

      res.json(course);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     PUT api/courses/:id
// @desc      Update course
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const {name, instructor,
    term,
    assignment1,
    assignment2,
    assignment3,
    assignment4,
    assignment5,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    midterm,
    final,
    project,
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
    video12,
    video13,
    video14,
    video15,
    video16,
    video17,
    video18,
    video19,
    video20, photo, title, office, email, phone} = req.body;

  // Build course object
  const courseFields = {};
  if (name) courseFields.name = name;
  if (instructor) courseFields.instructor = instructor;
  if (term) courseFields.term = term;
  if (assignment1) courseFields.assignment1 = assignment1;
  if (assignment2) courseFields.assignment2 = assignment2;
  if (assignment3) courseFields.assignment3 = assignment3;
  if (assignment4) courseFields.assignment4 = assignment4;
  if (assignment5) courseFields.assignment5 = assignment5;
  if (quiz1) courseFields.quiz1 = quiz1;
  if (quiz2) courseFields.quiz2 = quiz2;
  if (quiz3) courseFields.quiz3 = quiz3;
  if (quiz4) courseFields.quiz4 = quiz4;
  if (quiz5) courseFields.quiz5 = quiz5;
  if (midterm) courseFields.midterm = midterm;
  if (final) courseFields.final = final;
  if (project) courseFields.project = project;
  if (video1) courseFields.video1 = video1;
  if (video2) courseFields.video2 = video2;
  if (video3) courseFields.video3 = video3;
  if (video4) courseFields.video4 = video4;
  if (video5) courseFields.video5 = video5;
  if (video6) courseFields.video6 = video6;
  if (video7) courseFields.video7 = video7;
  if (video8) courseFields.video8 = video8;
  if (video9) courseFields.video9 = video9;
  if (video10) courseFields.video10 = video10;
  if (video11) courseFields.video11 = video11;
  if (video12) courseFields.video12 = video12;
  if (video13) courseFields.video13 = video13;
  if (video14) courseFields.video14 = video14;
  if (video15) courseFields.video15 = video15;
  if (video16) courseFields.video16 = video16;
  if (video17) courseFields.video17 = video17;
  if (video18) courseFields.video18 = video18;
  if (video19) courseFields.video19 = video19;
  if (video20) courseFields.video20 = video20;
  if (photo) courseFields.photo = photo;
  if (title) courseFields.title = title;
  if (office) courseFields.office = office;
  if (email) courseFields.email = email;
  if (phone) courseFields.phone = phone;

  try {
    let course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({msg: 'Course not found'});

    // Make sure user owns course
    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    course = await Course.findByIdAndUpdate(
      req.params.id,
      {$set: courseFields},
      {new: true},
    );

    res.json(course);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/courses/:id
// @desc      Delete course
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({msg: 'Course not found'});

    // Make sure user owns course
    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await Course.findByIdAndRemove(req.params.id);

    res.json({msg: 'Course removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/courses/:id
// @desc      Get course
// @access    Private
router.get('/:id', auth, async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({msg: 'Course not found'});

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
