const composants = {}

composants.slider = [{
        titre: "Ordinateur portable i9",
        soustitre: "Saisissez notre offre exceptionelle aujourd'hui",
        image: "assets/images/banners/banner1.png",
        lien: "detail/1",
        active: "active"
    },
    {
        titre: "Disque dur 2 TB",
        soustitre: "50% de remise sur votre première commande",
        image: "assets/images/banners/banner2.png",
        lien: "detail/2",
        active: ""
    },
   
]

composants.livraisons = {
    livraison: {
        titre: "Livraison",
        message: "Livraison en 24 heures dans tout Conakry, et en 72 heures à l'intérieur du pays"

    },
    retours: {
        titre: "Retours gratuits",
        message: "Vos articles peuvent être retournés jusqu'à 3 jours après achat"

    },
    support: {
        titre: "Support 24/7",
        message: "Votre support et service après vente disponible 24h/24 et j/7"

    }

}

composants.piedDePage = {
    liensUtiles: {
        nom: "Liens utiles",
        liens: [{
                nom: "A propos de nous",
                lien: "a_propos_de_nous.html"
            },
            {
                nom: "FAQ",
                lien: "faq.html"
            },
            {
                nom: "Nos magasins",
                lien: "nos_magasins.html"
            },
            {
                nom: "Nous contacter",
                lien: "nous_contacter.html"
            }
        ],
    },
    categories: {
        nom: "Catégories",
        categories: [{
                nom: "Electro-menager",
                lien: ""
            },
            {
                nom: "Informatique",
                lien: ""
            },
            {
                nom: "Mode",
                lien: ""
            },
            {
                nom: "Super marché",
                lien: ""
            },
        ],
    },
    moncompte: {
        nom: "Mon compte",
        liens: [{
                nom: "Mon compte",
                lien: "moncompte"
            },
            {
                nom: "Historique de commandes",
                lien: "hitorique"
            },
            {
                nom: "Mon panier",
                lien: "panier"
            }
        ]
    },

    slogan: "Trovez ici tout ce dont vous avez besoin et faites vous livrer dans toute Guinée",
    resauxSociaux: {
        facebook: "#",
        instagram: "#",
        tweeter: "#",
        youtube: "#",
        googleplus: "#"
    }

}


module.exports = composants