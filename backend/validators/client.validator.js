const { body } = require("express-validator");
const validators = {}

validators.client = 
    body("email").exists({checkFalsy: true}).withMessage('Adresse email obligatoire')
    .isEmail().withMessage("Adresse email invalide")

    body('nom').exists({checkFalsy:true}).withMessage('Le nom est obligatoire')
    body('telephone').exists({checkFalsy:true}).withMessage('Le téléphone est obligatoire')
    body('quartier').exists({checkFalsy:true}).withMessage('Le quartier est obligatoire')

module.exports = validators