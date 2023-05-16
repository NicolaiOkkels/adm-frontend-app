import { getImages, uploadImage, deleteImage } from '../controller/wineController.js';
import express from 'express';

const router = express.Router();

router.get('/', getImages);

router.post("/upload", uploadImage);

export default router;