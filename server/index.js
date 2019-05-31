var express = require('express'),
app         = express(),
router      = express.Router(),
fs          = require('fs'),
multer      = require('multer'),
storage     = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/images")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".jpg")
  }
}),
upload      = multer({ storage: storage })

//Get the names of all the images in the /images directory
router.get('/getImage', (req, res) => {
  var images = []
  fs.readdir('../client/public/images', (err, files) => {
    files.forEach(file => {
      var fileType = file.slice(-3)
      if ((fileType === "jpg") || (fileType === "JPG")){
        images.push(file)
      }
    });
    res.send({ images:images })
  });
})

//Upload a new image to the /images directory
router.post('/', upload.single('uploadedImage'), (req, res) => {
  res.redirect('http://localhost:3000')
})

app.use('/api', router)
app.listen(3001, () => { console.log('App listenting on port 3001')});
