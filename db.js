const mongoose = require("mongoose")
mongoose.Promise = global.Promise

mongoose.connect(`mongodb://localhost:27017/uploadImage`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(function(){
        console.log(`connected to database`)
    })
    .catch(function(){
        console.log(`something went wrong with connection`)
    })

module.exports = {
    mongoose
}