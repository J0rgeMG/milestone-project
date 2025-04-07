// Third party packages
const multer = require('multer');
const uuid = require('uuid').v4;

// We create our own multer object after configuring it
const upload = multer({
    storage: multer.diskStorage({
        destination: 'product-data/images',
        filename: function(req, file, cb) {
            cb(null, uuid() + '-' + file.originalname);
        }
    })
});
const configuredMulterMiddleware = upload.single('image');

// We export our object
module.exports = configuredMulterMiddleware;