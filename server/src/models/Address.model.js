import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    street1: {
        type: String,
        required: true,
        trim: true
    },
    street2: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    zipCode: {
        type: String,
        required: true,

    },
    country: {
        type: String,
        default: 'INDIA',
        trim: true
    },

}, {
    timestamps: true
});

const Address = mongoose.model('Address', addressSchema);

export default Address;