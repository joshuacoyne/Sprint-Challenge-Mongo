const mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({
    amount: Number,
    description: String,
    budget: {
        type:ObjectId,
        ref : 'Budget',
    },
    category: {
        type: ObjectId,
        ref: 'Category',
    }
})

module.exports = mongoose.model('Expense', expenseSchema);