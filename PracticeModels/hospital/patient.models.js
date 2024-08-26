const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        diagonsedWith: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        bloodGroup: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ['Male', "Female", "Others"],
            required: true
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        },
    },
    { timestamps: true }

    // timestamps gives us two fields created by, updated by
)

export const Patient = mongoose.model('Patient', patientSchema)