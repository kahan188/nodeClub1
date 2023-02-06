const multer = require("multer");
const path = require("path");
const uploadSchema = require("../model/UploadSchema");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 9000000 },

  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Only jpg,jpeg and png files are allowed"));
    }
    cb(undefined, true);
  },
}).single("file");

exports.uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    } else {
      if (req.file == undefined) {
        return res.status(402).json({
          error: "No file selected",
        });
      } else {
        //check size of file
        if (req.file.size > 5000) {
          return res.status(402).json({
            error: "File size is too large",
          });
        } else {
          var abspath = path.resolve("./uploads/" + req.file.filename);
          console.log(abspath);
          const upload = new uploadSchema({
            name: req.file.originalname,
            url: abspath,
          });

          upload.save((err, data) => {
            if (err) {
              return res.status(400).json({
                error: err.message,
              });
            } else {
              return res.status(200).json({
                message: "File uploaded successfully",
                file: abspath,
              });
            }
          });

          // return res.status(200).json({
          //     message:'File uploaded successfully',
          //     file:`uploads/${req.file.filename}`
          // })
        }
      }
    }
  });
};
exports.getFiles = (req, res) => {
  uploadSchema.find((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    } else {
      return res.status(200).json({
        data: data,
      });
    }
  });
};