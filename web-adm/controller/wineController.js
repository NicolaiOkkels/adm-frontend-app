import fs from 'fs';
import upload from '../middleware/multer.js';
import util from 'util';

const unlinkFile = util.promisify(fs.unlink);

export const getImages = async (req, res) => {
    let images = [];
    console.log("getImages");
    fs.readdir('./public/uploads', (err, files) => {
        if(!err){
            files.forEach(file => {
                images.push(file);
            })
        
        res.render('index', {images: images});
    } else {
        console.log(err);
    }
    });
}

export const uploadImage = async (req, res) => {
    // Use the multer object
    console.log("uploadImage");
    upload(req, res, (err) => {
      if(!err && req.files != "") { // ...all tests passed 
        res.status(200).send()
      } else if (!err && req.files == ""){ // ...the user didn't upload anything
        res.statusMessage = "Please select an image to upload";
        res.status(400).end()
      } else { // ...the image is bigger than 1MB OR one or more files are not jpeg, png, jpg, or gif
        res.statusMessage = (err === "Please upload images only" ? err : "Photo exceeds limit of 1MB") ;
        res.status(400).end()
      }
    })  
  }

  export const deleteImage = async (req, res) => {
    console.log("deleteImage");
      // Create an array with the images the user wants to delete
  const deleteImages = req.body.deleteImages // mulitmedia object coming from the frontend

  // If the array is empty
  if(deleteImages == ""){
    // ...the user didn't select an image/s to delete
    res.statusMessage = "Please select an image to delete";
    res.status(400).end()
  // Else the array in not empty
  } else {
    // ...delete each of the selected images from the uploads folder
    deleteImages.forEach( image => {
      unlinkFile("./public/uploads/" + image);
    })
    res.statusMessage = "Succesfully deleted";
    res.status(200).end()
  }
}