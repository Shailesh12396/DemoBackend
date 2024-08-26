const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        experienceInYears: {
            type: Number,
            default: 0
        },
        worksInHospitals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital'
            }
        ],
    },
    { timestamps: true }

    // timestamps gives us two fields created by, updated by
)

export const Doctor = mongoose.model('Doctor', doctorSchema)