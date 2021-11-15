const path = require('path');
const multer = require('multer');


const diskStorage = multer.diskStorage ({
    destination: (req, file,cb) =>{
        let carpetaAlmacenamiento = path.join(__dirname,"../../public/images/users")
        cb (null, carpetaAlmacenamiento );
    },
    filename: (req, file, cb) => {
        let profileImg = Date.now() + "-user" + path.extname(file.originalname);
        cb (null, profileImg);
    }
})

const uploadFile = multer ({storage: diskStorage})

module.exports = uploadFile;
