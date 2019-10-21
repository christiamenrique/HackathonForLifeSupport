//////////////////////////////////////////
///   api endpoints for managing parents //
////////////////////////////////////////
const router = require('express').Router();
let Parents = require('../models/parents.model');

// 1. get all parents message on record
router.get('/', (req, res) => {
    Parents.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    })
})

// 2. add a new message
router.post("/add", (req, res) => {
    Parents.create(req.body).then(data => res.json(data)).catch(err => console.log(err));
});

// 3. retrieve a specfic parent message
router.get("/:id", (req, res) => {
    Parents.findOne().then(data => res.json(data)).catch(err => console.log(err));
});


// 4. delete a specfic parent message
router.delete("/:id", async (req, res) => {
    const parent = await Parents.deleteOne({ _id: req.params.id })
    res.send(parent)
})

// 5. Retrieve reply and Update the message reply 
router.post("/update/:id", (req, res) => {
    let id = req.param.id
    console.log(id)
    Parents.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                reply: req.body.reply,
                date: Date.now
            }
        }, { new: true }
    ).then(data => res.json(data).catch(err => console.error(err)))
}
);



module.exports = router;