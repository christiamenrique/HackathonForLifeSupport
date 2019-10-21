
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// 1. get all exercise logs on record
router.get('/', (req, res) => {
    Exercise.find({}, (err, data) => {
        if(err) {
            res.send(err)
        } else {
            res.json(data)
        }
    })
  })

// 2. add a new exercise log
 router.post("/add", (req, res) => { 
    Exercise.create(req.body).then(data=>res.json(data)).catch(err=>console.log(err));
  });

// 3. retrieve a specfic exercise log
router.get("/:id", (req, res) => {
    Exercise.findOne().then(data=>res.json(data)).catch(err=>console.log(err));
  });


// 4. delete a specfic exercise log
router.delete("/:id",async (req, res) => {
    const exercise = await Exercise.deleteOne({_id: req.params.id})
    res.send(exercise)
})

// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
router.post("/update/:id", (req, res) => {
  let id = req.param.id
  console.log(id)
    Exercise.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: {
          username: req.body.username,
          description: req.body.description,
          duration: req.body.duration,
          date: req.body.date
        }
      },{new: true}
    ).then(data=> res.json(data).catch(err=> console.error(err)))}
    );
  


module.exports = router;