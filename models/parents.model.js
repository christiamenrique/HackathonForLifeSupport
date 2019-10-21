const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parentsSchema = new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        minlength: 3,
    },

    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        unique: true,
        required: "email is required"
    },

    phoneNumber: {
        type: String,
        trim: true,
        unique: true,
        validate: [/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Must be only numbers"]
    },

    message: {
        type: String,
        required: "profession is required",
        trim: true,
    },

    reply: {
        type: String,
    },

    messageCreated: {
        type: Date,
        default: Date.now
    },

},

    {
        timestamps: true,
    });

const Parent = mongoose.model('Parents', parentsSchema);

module.exports = Parent;
