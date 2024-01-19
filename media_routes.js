const mediaRoutes = require('express').Router();
const multer = require('multer');
const fonctions = require("../fonctions")
const mediaController = require('../controllers/media_controller');
const {Media} = require("../models")
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log("affichage du corps de la requete")
     // console.log(req);
      const modele = req.body.modele  // objet de l'upload
      const ext = file.mimetype.split("/")[0];
       cb(null, `public/fichiers/`)
    },
    filename: async (req, file, cb) => {
        console.log(file.originalname)
      const extension = file.originalname.slice(
        ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2
      );
      const nouveauNom = fonctions.uniqid()
      const nouveauFichier = `${nouveauNom}.${extension}`
       // on enregistre dans la table Media
      
      cb(null, `${req.body.modele}/${nouveauFichier}`)
    },
  });
  const upload = multer({ storage: multerStorage, limits: { fileSize: 4000000 } }); // 4 Mégas


mediaRoutes.get('/', async (req, res) =>  mediaController.getAll(req, res))
mediaRoutes.post('/', async (req, res) =>  mediaController.add(req, res))
mediaRoutes.put('/:id', async (req, res) =>  mediaController.update(req, res))
mediaRoutes.delete('/:id', async (req, res) =>  mediaController.delete(req, res))
mediaRoutes.get('/:id', async (req, res) =>  mediaController.getById(req, res))
mediaRoutes.post('/getby', async (req, res) =>  mediaController.getBy(req, res))
mediaRoutes.post('/upload',upload.single("file"), async (req, res) =>  mediaController.uploadMedia(req, res))
module.exports = mediaRoutes
