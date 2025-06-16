import formidable from 'formidable';
// formidable is used for image uploading 
import path from 'path';
import Destination from '../models/destinationModel.js';

export const createDestination = (req, res) => {
  const form = formidable({
    uploadDir: path.resolve('uploads'),
    keepExtensions: true,
    multiples: false,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ error: 'Image upload error' });
    }

    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const price = Array.isArray(fields.price) ? parseFloat(fields.price[0]) : parseFloat(fields.price);

    const imageFile = files?.image;
    const filePath = Array.isArray(imageFile) ? imageFile[0]?.filepath : imageFile?.filepath;
    const fileName = Array.isArray(imageFile) ? imageFile[0]?.newFilename : imageFile?.newFilename;

    if (!name || !price || !filePath || !fileName) {
      return res.status(400).json({ error: 'All fields (name, price, image) are required' });
    }

    const imagePath = path.join('uploads', fileName);

    try {
      const newDestination = new Destination({
        name,
        price,
        image: imagePath,
      });

      await newDestination.save();
      res.status(201).json(newDestination);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
};



// GET all destinations to show in fronttend from backend
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
