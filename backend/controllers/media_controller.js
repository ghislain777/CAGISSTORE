const {
    response,
    request
} = require('express');
const multer = require('multer');
const {
    where
} = require('sequelize');
const {
    Sequelize,
    Op
} = require('sequelize');
const fonctions = require('../fonctions');
const {
    Media,
    Produit
} = require('../models');
var Jimp = require("jimp");
const axios = require('axios');
const fs = require('fs');
const mediaController = {}

mediaController.includeMedia = [

]

mediaController.uploadMedia = async (req, res) => {
    const {
        cle,
        valeur
    } = req.body


    Jimp.read(`public/fichiers/${req.file.filename}`, (err, fichier) => {
        if (err) throw err;
        fichier
            .contain(540, 600) // resize
            .quality(100) // set JPEG quality
            // .greyscale() // set greyscale
            .write(`public/fichiers/${req.file.filename}`); // save
    });

    const media = {
        nom: req.body.nom,
        modele: req.body.modele,
        fichier: `/fichiers/${req.file.filename}`,
        champ: req.body.champ,
        type: "image",
    }
    media[cle] = valeur

    await Media.create(media)
    const lewhere = {
        modele: req.body.modele,
        champ: req.body.champ,
    }

    lewhere[cle] = +valeur
    console.log(lewhere)
    const medias = await Media.findAll({
        where: lewhere
    })
    res.json(medias);
}

// téléchargement du media à partir d'internet

mediaController.telechargerMedia = async (req, res) => {
    const {
        cle,
        valeur,
        url,
        modele,
        champ,
        nom
    } = req.body
    const mime = require('mime-types');
    const webp=require('webp-converter');
   // console.log(req.body)
    const nouveauNom = fonctions.uniqid()
    const extension = url.slice(
        ((url.lastIndexOf('.') - 1) >>> 0) + 2
    );
    var destination = `public/fichiers/${modele}/${nouveauNom}.${extension}`

    // recuperation de l'image sur le net
    const response = await axios.get(url, { responseType: 'arraybuffer' });
  fs.writeFile(destination, response.data, (err) => {
    if (err) throw err;
    console.error('Image downloaded successfully!');
    const mime_type = mime.lookup(destination)
console.error(mime_type);
if(mime_type === "image/webp") {
    // on convertir le fichier en jpg avant de le traiter
    const result = webp.dwebp(destination,destination+'.jpg',"-o",logging="-v");
    result.then((response) => {
        console.log(response);
        Jimp.read(destination+'.jpg').then((fichier => {
            fichier
                .contain(540, 600) // resize
                .quality(100) // set JPEG quality
                // .greyscale() // set greyscale
                .write(destination)
    
            const media = {
                nom: nom,
                modele: modele,
                fichier: `/fichiers/${modele}/${nouveauNom}.${extension}`,
                champ: champ,
                type: "image",
            }
            media[cle] = valeur
    
            Media.create(media).then(() => {
                const lewhere = {
                    modele: req.body.modele,
                    champ: req.body.champ,
                }
                lewhere[cle] = +valeur
                Media.findAll({
                    where: lewhere
                }).then((medias) => {
                    res.send(medias)
    
    
                })
                
            })
    
        }))


      });

}
else { // le fichier n'est pas de type webp

    Jimp.read(destination).then((fichier => {
        fichier
            .contain(540, 600) // resize
            .quality(100) // set JPEG quality
            // .greyscale() // set greyscale
            .write(destination)

        const media = {
            nom: nom,
            modele: modele,
            fichier: `/fichiers/${modele}/${nouveauNom}.${extension}`,
            champ: champ,
            type: "image",
        }
        media[cle] = valeur

        Media.create(media).then(() => {
            const lewhere = {
                modele: req.body.modele,
                champ: req.body.champ,
            }
            lewhere[cle] = +valeur
            Media.findAll({
                where: lewhere
            }).then((medias) => {
                res.send(medias)


            })
            
        })

    }))

}
  });

}






mediaController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const resultat = await Media.findAndCountAll({
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage * 1,
            order: [
                ['id', 'desc']
            ],
            where: {
                ...parametresRequete

            },
            include: mediaController.includeMedia,

        })
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mediaController.update = async (req, res) => {
    try {
        const response = await Media.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const media = Media.findOne({
            where: {
                id: req.params.id
            },
            include: mediaController.includeMedia
        })
        res.status(200).send(media)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mediaController.deleteMedia = async (req, res) => {
    // on recherhe le produit associé à ce media

    const objet = req.params.objet



    const media = await Media.findByPk(req.params.id)

    // on recupere l'id de l'ojet assoccié à l'image qu'on veut supprimer
    const idObjet = media[objet]


    // const idProduit = media.produit
    const fichier = media.fichier;
    // on supprimer le fichier sur le disque:
    var fs = require('fs');
    var filePath = `.${fichier}`;
    try {

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        // on supprime l'enregistrement correspondant dans la base de données (media)

        await Media.destroy({
            where: {
                id: req.params.id
            }
        })

        // on recupere on recupère la liste des médias de ce même objet
        const leWere = {}
        leWere[objet] = idObjet

        const medias = await Media.findAll({
            where: leWere
        })
        res.status(200).send(medias)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

mediaController.getById = async (req, res) => {
    try {
        const response = await Media.findOne({
            where: {
                id: req.params.id
            },
            include: mediaController.includeMedia
        })
        if (response == null) {
            res.status(404).send('Media non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


mediaController.getBy = async (req, res) => {
    try {
        const response = await Media.findAndCountAll({
            where: req.body,
            include: mediaController.includeMedia
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = mediaController