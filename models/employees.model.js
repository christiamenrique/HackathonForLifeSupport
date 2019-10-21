const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: "name is required",
    trim: true,
    minlength: 3,
  },

  profession: {
    type: String,
    required: "profession is required",
    trim: true,
  },

  address: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    trim: true,
    unique: true,
    validate: [/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Must be only numbers"]
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
    required: "email is required"
  },

  employeeCreated: {
    type: Date,
    default: Date.now
  }

},

  {
    timestamps: true,
  });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;



