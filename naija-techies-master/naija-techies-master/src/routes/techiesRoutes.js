const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary');
const techieController = require('../controllers/techiesController');

const storage = multer.diskStorage({
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now());
    },
});

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const upload = multer({
    dest: 'public/img/users'
});



router
    .route('/')
    .get(techieController.getAllTechiesNames)

    .post(techieController.createTechNames)

router.route('/aggregate-user').get(techieController.aggregateUser)

router.route('/success')
.get(techieController.successPage);

router
    .route('/search/:email')
    .get(techieController.searchByEmail)

router
    .route('/:id')
    .get(techieController.getSingleTechieName)
    .patch(techieController.updateTechieName)
    .delete(techieController.deleteTechieName)

router.route('/:username')
    .get(techieController.getSingleByUsername);

router
    .route('/api-info')
    .get(techieController.apiCalls);
router
    .route('/docs')
    .get(techieController.DocsPage);

router
    .route('/subscribe')
    .post(techieController.subscribeEmail);


// router.patch('/upload/image/:techieId', upload.single('photo'), techieController.updateMe);

module.exports = router;