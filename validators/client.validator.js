const { body } = require("express-validator");
const validators = {}

validators.client = 
    body("email").exists({checkFalsy: true}).withMessage('Adresse email requise')
    .isEmail().withMessage("Adresse email invalide")

    body('nom').exists({checkFalsy:true}).withMessage('Le nom est obligatoire')
    body('telephone').exists({checkFalsy:true}).withMessage('Le téléphone est obligatoire')



module.exports = validators