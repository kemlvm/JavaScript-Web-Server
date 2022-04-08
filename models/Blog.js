const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: { type: String, required: 'Cannot be empty' },
    comSentence: { type: String, required: 'Cannot be empty' },
    titcomImage: { type: String, required: 'Cannot be empty' },
    blog: { type: String, required: 'Cannot be empty' },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Blog", BlogSchema)