import multer from 'multer'; 
import path from 'path';

// multer.diskStorage gives you full control of where to store the images
const storage = multer.diskStorage({
    // Choose a destination
      destination: function (req, file, cb) {
    // Lets store them in the uploads folder
        cb(null, "./public/uploads/")
      },
    // Choose a filename for each uploaded image
      filename: function (req, file, cb) {
    // Lets create a unique name for each image
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname))
      }
    })
  
    const upload = multer({ 
      storage: storage, // Choose destination and filename
      limits: { fileSize: 1000000 }, // Set a max file size
      fileFilter: function (req, file, cb) { // Filter out certain files
        checkFileType(file, cb)
      }
    }).any() // accepts all files types coming in through the wire
  
  
    function checkFileType(file, cb){
      // Allow the following file types only
      const filetypes = /jpeg|png|jpg|gif/
      // Test if the uploaded image file extensions match the allowed types
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
      // Test if the uploaded image mimetypes match the allowed types 
      const mimetype = filetypes.test(file.mimetype)
      // If both test return true allow the images to be uploaded
      if(mimetype && extname){
        return cb(null,true)
      } else { // otherwise return the following error
        cb("Please upload images only")
      }
    }

export default upload;