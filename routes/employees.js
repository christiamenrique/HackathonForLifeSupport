/////////////////////////////////////////////
//// API endpoints for managing employees //
///////////////////////////////////////////
const router = require('express').Router();
let Employee = require('../models/employees.model');

// 1. get all employee on record
router.get('/', (req, res) => {
    Employee.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    })
})

// 2. add a new employee
router.post('/add', async ({body}, res) => {
    Employee.create(body)
    .then(dbEmployees => {
      res.json(dbEmployees)
    })
.catch(err => {
  res.json(err)
})

})

// 2. retrieve a specific employee and update it 
router.post("/update/:id", (req, res) => {
    let id = req.param.id
    console.log(id)
    Employee.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                // name: req.body.name,
                profession: req.body.profession,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                // employeeCreated: Date.now
            }

        }, { new: true }
    ).then(data => res.json(data).catch(err => console.error(err)))
});

// 3. delete an employee
router.delete("/:id", async (req, res) => {
    const employee = await Employee.deleteOne({ _id: req.params.id })
    res.send(employee)
})

module.exports = router;






































module.exports = router;