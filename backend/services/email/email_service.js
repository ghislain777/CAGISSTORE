const nodemailer = require('nodemailer');
const {Parametre} = require('../../models')
const ejs = require('ejs');
const { imagesEmail, contenuEmailCommande, contenuEmailClient, contenuEmailUpdateProfile} = require('./parametresEmail');

const getEmailParametres = async () => {
  const parametresDb = await Parametre.findAll()
return {
  senderName: parametresDb.find((param, index, array) => param.nom =="EMAIL_NOM_ENVOYEUR").valeur,
  senderEmail: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_ENVOYEUR").valeur,
  server: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_SERVEUR").valeur,
  port: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_PORT").valeur,
  userName: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_USERNAME").valeur,
  password: parametresDb.find((param, index, array) => param.nom =="EMAIL_EMAIL_PASSWORD").valeur,
  nomDeBoutique:parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_NOM").valeur,
  adresseBoutique:parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_LIGNE1").valeur,
  urlBoutique: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_URL").valeur,
  images:{
    boutique: {
      lien: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_URL").valeur,
      image: `assets/images/emails/logo.png`
  },
    facebook: {
        lien: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_FACEBOOK").valeur,
        image: `assets/images/emails/facebook.png`
    },
    instagram: {
        lien: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_INSTAGRAM").valeur,
        image: `assets/images/emails/instagram.png`
    },
    tweeter: {
        lien: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_TWEETER").valeur,
        image: `assets/images/emails/tweeter.png`
    },
    youtube: {
        lien: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_YOUTUBE").valeur,
        image: `assets/images/emails/youtube.png`
    },
    linkedIn: {
        lien: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_LINKEDIN").valeur,
        image: `assets/images/emails/linkedIn.png`
    },

  }
}
}

const getTransport = async () => {
  const parametresEmail = await getEmailParametres()
  return nodemailer.createTransport({
    host: parametresEmail.server,
    port: parametresEmail.port,
    auth: {
      user: parametresEmail.userName,
      pass: parametresEmail.password
    },
    tls: {
      rejectUnauthorized: false
  }
  })
}




// const transport = nodemailer.createTransport({
//   host: parametresEmail.server,
//   port: parametresEmail.port,
//   auth: {
//     user: parametresEmail.userName,
//     pass: parametresEmail.password
//   },
//   tls: {
//     rejectUnauthorized: false
// }
// });

const sendEmailCommande = async (commande, evenement) => {
  const parametresEmail = await getEmailParametres()
  const transport = await getTransport()
  const sender = `${parametresEmail.senderName} < ${parametresEmail.senderEmail} >`

  console.log(`Envoi de mail pour ${evenement}`)
  const contenu = contenuEmailCommande(commande, evenement, parametresEmail)

  ejs.renderFile(__dirname + '/template_email_commande.ejs', {commande, contenu, parametresEmail}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var mailOptions = {
        from: sender,
        to: commande.Client.email,
        subject: contenu.sujet,
        html: data,
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email envoyé: %s', info.messageId);
      });
    }
  });
}


const sendEmailClient= async (leclient, evenement) => {
  const parametresEmail = await getEmailParametres()
  const transport = await getTransport()
  const sender = `${parametresEmail.senderName} < ${parametresEmail.senderEmail} >`
  console.log(sender)

  const contenu = contenuEmailClient(leclient, evenement, parametresEmail)
  ejs.renderFile(__dirname + '/template_email_client.ejs', {leclient, contenu, imagesEmail, parametresEmail}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var mailOptions = {
        from: sender,
        to: leclient.email,
        subject: contenu.sujet,
        html: data,
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
    }
  });
}


const sendEmailUpdateProfile= async (leclient) => {
  const parametresEmail = await getEmailParametres()
  const transport = await getTransport()
  const sender = `${parametresEmail.senderName} < ${parametresEmail.senderEmail} >`


  const contenu = contenuEmailUpdateProfile(leclient)
  ejs.renderFile(__dirname + '/template_email_update_profile.ejs', {leclient, contenu, imagesEmail, parametresEmail}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var mailOptions = {
        from: sender,
        to: leclient.email,
        subject: contenu.sujet,
        html: data,
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
    }
  });
}



module.exports = {
    sendEmailCommande,
    sendEmailClient,
    sendEmailUpdateProfile
};