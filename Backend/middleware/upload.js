import multer from "multer";

// const upload = multer({ dest: "./files" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const onlyImages = (req, file, cb) => {
    const puntos = file.originalname.split("."); // archivo.hoy.png
    const ext = puntos[puntos.length - 1];
  
    if (ext == "jpg" || ext == "png" || ext == "gif") {
      return cb(null, true);
    } else {
      return cb(new Error("Only Images"));
    }
  };

const upload = multer({
    storage: storage,
    fileFilter: onlyImages
  });

export default upload;
