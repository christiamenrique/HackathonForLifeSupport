//////////////////////////////////////////
///   api endpoints for managing students //
////////////////////////////////////////
const router = require('express').Router();
let Students = require('../models/students.model');

// 1. get all users on record
router.get('/', async (req, res) => {
    const students = await Students.find({})
    res.json(students)
 
})

// 2. add a new user
  router.post('/add', async ({body}, res) => {
      Students.create(body)
      .then(dbStudents => {
        res.json(dbStudents)
      })
  .catch(err => {
    res.json(err)
  })

  })

  // 3. delete a user
router.delete("/:id",async (req, res) => {
  const students = await Students.deleteOne({_id: req.params.id})
  res.send(students)
})

// 4. retrieve a specific student and update information
router.post("/update/:id", (req, res) => {
    let id = req.param.id
    console.log(id)
    Students.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                name: req.body.name,
                comments: req.body.comments,
                attendance: req.body.attendance,
                teamName: req.body.tyeamName,
                parantPhoneNumber: req.body.parantPhoneNumber,
            }

        }, { new: true }
    ).then(data => res.json(data).catch(err => console.error(err)))
});


module.exports = router;