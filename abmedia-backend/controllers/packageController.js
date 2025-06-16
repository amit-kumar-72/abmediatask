import formidable from 'formidable';
import path from 'path';
import Package from '../models/Package.js';

export const createPackage = (req, res) => {
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

    const imageFile = files?.image;
    const filePath = Array.isArray(imageFile) ? imageFile[0]?.filepath : imageFile?.filepath;
    const fileName = Array.isArray(imageFile) ? imageFile[0]?.newFilename : imageFile?.newFilename;

    if (!name || !filePath || !fileName) {
      return res.status(400).json({ error: 'All fields (name, price, image) are required' });
    }

    const imagePath = path.join('uploads', fileName);

    try {
      const newPackage = new Package({
        name,
        image: imagePath,
      });

      await newPackage.save();
      res.status(201).json(newPackage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
};

// GET all packages from aur backend
export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
