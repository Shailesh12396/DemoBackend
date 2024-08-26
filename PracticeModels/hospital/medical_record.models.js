const mongoose = require('mongoose')

const medicalRecordSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        doctor: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Doctor'
            }
        ],
        disease: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }

    // timestamps gives us two fields created by, updated by
)

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)