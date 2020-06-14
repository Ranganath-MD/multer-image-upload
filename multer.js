const multer = require('multer')
const path = require("path")
// configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === `image/jpeg` || `image/png`) {
        cb(null, true)
    } else {
        cb(null, `Only jpeg/jpg/png images are allowed`)
    }
}

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
})

module.exports = {upload}