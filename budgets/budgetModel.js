const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    budgetAmount: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Budget', budgetSchema);
