const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },

        DOB: {
            type: Date,
            required: true,
        },

        comments: {
            type: String,
        },

        attendance: {
            type: Boolean,
            required: true
        },

        teamName: {
            type: String,
            trim: true,
            required: true
        },
        win: {
            type: Number,
            trim: true
        },
        loss: {
            type: Number,
            trim: true
        },
        studentCreated: {
            type: Date,
            default: Date.now
        },
        parantName: {
            type: String,
            required: true
        },

        parantPhoneNumber: {
            type: String,
            trim: true,
            unique: true,
            validate: [/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/]
        }

    },

    {
        timestamps: true,
    });

const Student = mongoose.model('Student', studentsSchema);

module.exports = Student;