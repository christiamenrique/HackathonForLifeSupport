
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');


// 1. get all users on record
router.get('/', async (req, res) => {
    const user = await User.find({})
    res.json(user)
 
})

// 2. add a new user
  router.post('/add', async ({body}, res) => {
      User.create(body)
      .then(dbUsers => {
        res.json(dbUsers)
      })
  .catch(err => {
    res.json(err)
  })

  })

  // 3. delete a user
router.delete("/:id",async (req, res) => {
  const user = await User.deleteOne({_id: req.params.id})
  res.send(user)
})


module.exports = router;