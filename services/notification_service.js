var { admin } = require("../config/firebase_config")
var notificationService = {}


notificationService.NotifierMisajourReversement= async (reversement) => {

    console.error("Notification de la mise à jour de reversement" + reversement.id)
    try {
        const notificationpush = {
            notification: notificationService.getNotificationMisajourReversement(reversement),
            data: {
                id: reversement.id.toString(),
                model: "reversement",
                objet: "misajour"
            },
            android: {
                priority: "high",
                ttl: 86400000
            },
            token: reversement.Marchand.token
        }
        await admin.messaging().send(notificationpush)

    }
    catch (error) {
        console.log(error)

    }
}



notificationService.NotifierNouvelAchat = async (achat) => {

    console.log(`Notification au marchand ${achat.Marchand.nom} d'un nouvel achat` )
    try {
        const notificationpush = {
            notification: notificationService.getNotificationNouvelAchat(achat),
            data: {
                id: achat.id.toString(),
                model: "achat",
                objet: "nouveau"
            },
            android: {
                priority: "high",
                ttl: 86400000
            },
            token: achat.Marchand.token
        }
        await admin.messaging().send(notificationpush).then((`Envoi de la notification push réussie`))

    }
    catch (error) {

        console.log(`Problème lors de l'envoi de la notification push...`)
        console.log(error)
    }
}

//Notification pour les administrateurs et les cuisiiers
notificationService.getNotificationMisajourReversement = (reversement) => {
    switch (reversement.statut) {
        case "Validée":
            return {
                title: `Validation votre demande de reversement # ${reversement.id}`,
                body: `Votre demande de reversement a été validée et est en attente de payement`
            }

        case "Effectuée":
            return {
                title: `Payement de votre demande de reversment# ${reversement.id}`,
                body: `Votre demande de reversement a été payée`
            }

        case "Rejetée":
            return {
                title: `Rejet de votre demande de reversement ID: ${reversement.id}`,
                body: `Votre demande de reversement a été rejetée`
            }
            

        default:
            return {
                title: `Mise à jour votre demande de reversement`,
                body: `Votre demande de reversement a été mise à jour. Nouveau statut: ${reversement.statut}`
            }
    }

    
}

notificationService.getNotificationNouvelAchat = (achat) => {

    return {
        title: `nouveau payement de ${achat.quantite} tickets`,
        body: `Nouveau payement de ${achat.Employe.nom} ${achat.Employe.prenom} effectué en votre faveur`
    }
}


module.exports = notificationService