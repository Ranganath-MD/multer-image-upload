const express = require("express")
const port = process.env.PORT || 8080;
const app = express()
const {upload} = require("./multer")
const { mongoose } = require('./db')
const { User } = require("./model")
app.use('/assets/uploads', express.static(__dirname + '/assets/uploads'));

app.get("/", (req, res) => {
    res.send("<h1>Image upload </h1>");
});

app.post("/userinfo", upload.single("image"), (req, res) => {
    const imageUrl = `http://localhost:8080${req.file.destination.slice(1, (req.file.destination.length))}/${req.file.filename}`
    const { username, phone } = req.body
    const user = new User({
        username,
        phone,
        image: imageUrl
    })
    user.save()
        .then(user => {
            res.send({user, message: "Successfully uploaded your profile photo with the info"})
        })
        .catch(err => {
            res.send(err)
        })

})

app.listen(port, () => {
    console.log("server is running on the port", port)
})
