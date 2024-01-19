const express = require('express')
const cors = require('cors');
const multer = require('multer');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const {Role, Media} = require('./models')
const roleRoutes = require('./routes/role_routes');
const utilisateurRoutes = require('./routes/utilisateur_routes');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu_route');
const activiteRoutes = require('./routes/activite_routes');
const privilegeRoutes = require('./routes/privilege_routes');
const parametreRoutes = require('./routes/parametre_routes.js')
const mediaRoutes = require('./routes/media_routes.js')
const payRoutes = require('./routes/pay_routes.js')
const villeRoutes = require('./routes/ville_routes.js')
const communeRoutes = require('./routes/commune_routes.js')
const quartierRoutes = require('./routes/quartier_routes.js')
const fournisseurRoutes = require('./routes/fournisseur_routes.js')
const transporteurRoutes = require('./routes/transporteur_routes.js')
const moyendepayementRoutes = require('./routes/moyendepayement_routes.js')
const categorieRoutes = require('./routes/categorie_routes.js')
const souscategorieRoutes = require('./routes/souscategorie_routes.js')
const produitRoutes = require('./routes/produit_routes.js')
const clientRoutes = require('./routes/client_routes.js')
const commandeRoutes = require('./routes/commande_routes.js')
const lignecommandeRoutes = require('./routes/lignecommande_routes.js')
const panierRoutes = require('./routes/panier_routes.js')
const statutcommandeRoutes = require('./routes/statutcommande_routes.js')
const lignepanierRoutes = require('./routes/lignepanier_routes.js')
const adresseRoutes = require('./routes/adresse_routes.js')

const fonctions = require("./fonctions")
const PORT = process.env.PORT || 8000
const app = express()
const path = require('path');
const webRoutes = require('./routes/web_routes');
const webController = require('./controllers/web_controller');

// parametrege du moteur de template
app.engine('.html', require('ejs').renderFile)
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json())
app.use(cookieParser());

app.use(cors({
  origin: '*'
}));

// routes API
app.use('/api/roles', roleRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/activites', activiteRoutes);
app.use('/api/privileges', privilegeRoutes);
app.use('/api/parametres', parametreRoutes);
app.use('/api/medias', mediaRoutes); 
app.use('/api/pays', payRoutes); 
app.use('/api/villes', villeRoutes); 
 app.use('/api/communes', communeRoutes); 
 app.use('/api/quartiers', quartierRoutes); 
app.use('/api/fournisseurs', fournisseurRoutes); 
app.use('/api/transporteurs', transporteurRoutes); 
app.use('/api/moyendepayements', moyendepayementRoutes); 
app.use('/api/categories', categorieRoutes); 
app.use('/api/souscategories', souscategorieRoutes); 
app.use('/api/produits', produitRoutes); 
app.use('/api/clients', clientRoutes); 
app.use('/api/commandes', commandeRoutes);
app.use('/api/lignecommandes', lignecommandeRoutes)
app.use('/api/paniers', panierRoutes)
app.use('/api/lignepaniers', lignepanierRoutes)
app.use('/api/statutcommandes', statutcommandeRoutes); 
app.use('/api/adresses', adresseRoutes); 

 // partie statique du site (assets et fichiers uploadés)
 app.use('/assets',express.static('assets')); 
 app.use('/fichiers',express.static('public/fichiers')); 
 app.use('/admin',express.static('admin')); 


//app.use(express.static('public')); 
// Administration du site (frontend react)

app.get('/admin*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// routes 

app.use(session({
  name: 'SessionCookie',
  secret: 'Shsh!Secret!',
  resave: true,
  saveUninitialized: true,
  cookie: {
      secure: false,
      expires: 1000 * 60 * 60 * 24 //24 heures
  }
}))
app.use("/", async (req, res, next) => webController.getParametre(req, res, next), webRoutes)

app.listen(PORT, () => {
  console.log(`Express server listening on port `, PORT)
});

app.get('/', (req, res) => {
  res.send("working!!")
})
