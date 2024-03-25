
//const {Parametre} = require('../../models')



// const getEmailParametres = async () => {
//     const parametresDb = await Parametre.findAll()
// return {

//     senderName: parametresDb.find((param, index, array) => param.nom =="EMAIL_NOM_ENVOYEUR").valeur,
//     senderEmail: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_ENVOYEUR").valeur,
//     server: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_SERVEUR").valeur,
//     port: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_PORT").valeur,
//     userName: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_USERNAME").valeur,
//     password: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_PASSWORD").valeur,
//     nomDeBoutique:parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_NOM").valeur,
//     adresseBoutique:parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_LIGNE1").valeur,
//     urlBoutique: `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
// }
//}

// const parametresEmail = await getEmailParametres()

// const parametresEmail = {
//     sender: "KITA CI <kitaci@zentechnologies.net>",
//     server: "mail.zentechnologies.net",
//     port: 587,
//     userName: 'kitaci@zentechnologies.net',
//     password: '&UDEcr0-a06g',
//     nomDeBoutique: 'KITA CI',
//     adresseBoutique: `Commune de Cocody, Abidjan, Côte d'Ivoire`,
//     urlBoutique: ""
//}

// const imagesEmail = {
//     logo: `${parametresEmail.urlBoutique}/assets/images/emails/logo.png`,
//     facebook: {
//         lien: "#",
//         image: `${parametresEmail.urlBoutique}/assets/images/emails/facebook.png`
//     },
//     instagram: {
//         lien: "#",
//         image: `${parametresEmail.urlBoutique}/assets/images/emails/instagram.png`
//     },
//     tweeter: {
//         lien: "#",
//         image: `${parametresEmail.urlBoutique}/assets/images/emails/tweeter.png`
//     },
//     youtube: {
//         lien: "#",
//         image: `${parametresEmail.urlBoutique}/assets/images/emails/youtube.png`
//     },
//     linkedIn: {
//         lien: "#",
//         image: `${parametresEmail.urlBoutique}/assets/images/emails/linkedIn.png`
//     },
//}


const contenuEmailCommande = (commande, evenement, parametresEmail) => {
    const reception = {

        sujet: `[${parametresEmail.nomDeBoutique}] Reception de votre nouvelle commande`,
        entete: `Votre commande sur la boutique ${parametresEmail.nomDeBoutique} a été bien reçu`,
        titre: `Reception de votre nouvelle commande sur ${parametresEmail.nomDeBoutique}`,
        message: `Votre commande sur la boutique ${parametresEmail.nomDeBoutique} a été bien reçue, nous vous remercions.
        Elle est <strong>en cours de traitement.</strong>. Vous serez notifié dans un bref délais dès confirmation de votre commande. <br/>`
    }
    const confirmation = {
        sujet: `[${parametresEmail.nomDeBoutique}] Confirmation de votre commande #${commande.id}`,
        entete: `Votre commande #${commande.id} sur la boutique ${parametresEmail.nomDeBoutique} a été confirmée`,
        titre: `Confirmation de votre commande sur ${parametresEmail.nomDeBoutique}`,
        message: `Votre commande sur la boutique ${parametresEmail.nomDeBoutique} a été confirmée,
        Elle est <strong>en cours de préparation.</strong> Vous serez contactés dans un bref délais en vue de l'expédition de votre commande. <br/>`
    }

    const expedition = {
        sujet: `[${parametresEmail.nomDeBoutique}] Expédition de votre commande #${commande.id}`,
        entete: `Votre commande #${commande.id} sur la boutique ${parametresEmail.nomDeBoutique} a été expédiée.`,
        titre: `Expédition de votre commande #${commande.id} sur ${parametresEmail.nomDeBoutique}`,
        message: `Votre commande sur la boutique ${parametresEmail.nomDeBoutique} a été <strong>expédiée.</strong>
        Votre transporteur vous contactera pour une livraison dans de meilleures conditions. Nous vous remercions pour votre confiance. <br/>`
    }
    const livraison = {
        sujet: `[${parametresEmail.nomDeBoutique}] Livraison de votre commande #${commande.id}`,
        entete: `Votre commande #${commande.id} sur la boutique ${parametresEmail.nomDeBoutique} a été livrée`,
        titre: `Livraison de votre commande #${commande.id} sur ${parametresEmail.nomDeBoutique}`,
        message: `Votre commande sur la boutique ${parametresEmail.nomDeBoutique} a été <strong>livrée</strong><br/>,
        Merci pour votre confiance et nous attendons vous revoir sur nos differentes plateformes. <br/>`
    }

    const annulation = {
        sujet: `[${parametresEmail.nomDeBoutique}] Annulation de votre commande #${commande.id}`,
        entete: `Votre commande #${commande.id} sur la boutique ${parametresEmail.nomDeBoutique} a été annulée`,
        titre: `Annulation de votre commande #${commande.id} sur ${parametresEmail.nomDeBoutique}`,
        message: `Votre commande sur la boutique ${parametresEmail.nomDeBoutique} a bien été <strong>annulée.</strong>
        `
    }

    switch (evenement) {
        case "reception":
            return reception
        case "confirmation":
            return confirmation
        case "expedition":
            return expedition
        case "livraison":
            return livraison
        case "annulation":
            return annulation

        default:
            return null
    };


}


const contenuEmailClient = (leclient, evenement, parametresEmail) => {
    const inscription = {
        sujet: `[${parametresEmail.nomDeBoutique}] Création de votre compte`,
        entete: `Votre compte a été créé sur ${parametresEmail.nomDeBoutique}`,
        titre: `Création de votre compte sur la boutique ${parametresEmail.nomDeBoutique}`,
        message: `Votre compte a été créé avec succès sur ${parametresEmail.nomDeBoutique}.<br/><br/>
         Ci-dessous les détails de vos accès: <br/>
         <strong>Téléphone:</strong> ${leclient.telephone} <br/>
         <strong>Adresse email:</strong> ${leclient.email} <br/>
         <strong>Mot de passe:</strong> ${leclient.motdepasse} <br/>
        
         `
    }
    const passwordReset = {
        sujet: `[${parametresEmail.nomDeBoutique}] Réinitialisation de votre mot de passe`,
        entete: `Création de votre compte  sur la boutique ${parametresEmail.nomDeBoutique}`,
        titre: `Création de votre compte sur la boutique ${parametresEmail.nomDeBoutique}`,
        message: `Votre compte a bien été crééé sur ${parametresEmail.nomDeBoutique}.<br/>
        Ci-dessous les détails de vos accès: <br/>
        <strong>Adresse email:</strong> ${leclient.email} <br/>
        <strong>Mot de passe:</strong> ${leclient.motdepasse} <br/>
        <strong>Téléphone:</strong> ${leclient.telephone} <br/>
        `
    }


    switch (evenement) {
        case "inscription":
            return inscription
        case "passwordreset":
            return passwordReset

        default:
            return null
    };


}

const contenuEmailUpdateProfile = (leclient, parametresEmail) => {

    return {
        sujet: `[${parametresEmail.nomDeBoutique}] Modification de votre compte`,
        entete: `Votre compte a été modifié sur ${parametresEmail.nomDeBoutique}`,
        titre: `modification de votre compte sur la boutique ${parametresEmail.nomDeBoutique}`,
        message: `Votre compte a été modifié avec succès sur ${parametresEmail.nomDeBoutique}.<br/><br/>
         Ci-dessous les nouveaux détails: <br/>
         <strong>Nom:</strong> ${leclient.nom} <br/>
         <strong>Prénom:</strong> ${leclient.prenom} <br/>
         <strong>Téléphone:</strong> ${leclient.telephone} <br/>
         <strong>Adresse email:</strong> ${leclient.email} <br/>
         <strong>Mot de passe:</strong> ${leclient.motdepasse} <br/>     
         `
    }

}


module.exports = {
    contenuEmailCommande,
    contenuEmailClient,
    contenuEmailUpdateProfile
}