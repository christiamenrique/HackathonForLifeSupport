const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentsSchema = new Schema(
    {
        image: {
            type: String,
            unique: true
        },

        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },

        DOB: {
            type: Date,
            trim: true

        },

        description: {
            type: String,
        },

        // attendance: {
        //     type: Boolean,
        //     required: true
        // },

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
            default: Date.now,
            trim: true

        },

        parentName: {
            type: String,
            required: true
        },

        parentPhoneNumber: {
            required: true,
            type: String,
            validate: [/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/],
            trim: true
        }

    },

    {
        timestamps: true,
    });

const Student = mongoose.model('Student', studentsSchema);

module.exports = Student;