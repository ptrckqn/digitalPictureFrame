var express = require('express'),
app         = express(),
router      = express.Router(),
fs          = require('fs'),
multer      = require('multer'),
storage     = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/build/images")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".jpg")
  }
}),
upload      = multer({ storage: storage })

//Get the names of all the images in the /images directory
router.get('/getImage', (req, res) => {
  var images = []
  fs.readdir('./client/build/images', (err, files) => {
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
  res.redirect('/')
})

//Production routing when hosted on Heroku
if(process.env.NODE_ENV === 'production'){
  //Serving production assets such as main.js and main.css
  app.use(express.static('client/build'))

  //Serving up index.html if a route is not recognized
  const path = require('path')
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use('/', router)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});
