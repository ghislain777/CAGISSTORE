$(function () { 
    var formulaire_moncompte = $("#formulaire_moncompte")
$("a[action=supprimer_adresse]").click(function (e) { 
    supprimerAdresse(e.target.attributes["ad"].value) ;
    
});


$("a[action=modifier_adresse]").click(function (e) { 
    modifierAdresse(e.target.attributes["ad"].value) ;
    
});


$("a[action=annuler_commande]").click(function (e) { 
    annulerCommande(e.target.attributes["id"].value);
    
});


$("a[action=imprimer_commande]").click(function (e) { 
    imprimerCommande(e.target.attributes["id"].value);
    
});



 const getColorStatut = (statut) => {
        switch (statut) {
            case "5":
                return "bg-danger text-white";
                break;
            case "2":
                return "bg-info text-dark";
                // case 2
                break;
            default:
                return "bg-warning text-dark";
            // default code
        };
    }


// $('span[pour=commande]').each((index, element) => {
//     console.log(element)
//     element.addClass(getColorStatut("bg-danger text-white"))
// });

$('span[pour=commande]').addClass(function( index ) {
    console.log(this.attributes["statut"].value)
    switch (this.attributes["statut"].value) {
        case "5": // Annulée
            return "bg-danger text-white";
            break;
        case "1": //reçue
            return "bg-warning text-dark";
            case "2": //confirmee
            return "bg-primary text-white";
            case "3": //expédiée
            return "bg-info text-white";
            case "4": //livrée
            return "bg-success text-white";
        default:
            return "bg-warning text-dark";
        // default code
    };
  })



const supprimerAdresse = (id) => {
    $.ajax({
                type: "DELETE",
                url: `/api/adresses/${id}`,
                data: {},
                dataType: "application/json",
                statusCode: {
                    200: function (res, status, error) {
                        alert("Suppression réussie")
                        window.location.reload()
                    }
                }
            })
}

const modifierAdresse = (id) => {
    alert(`suppression de l'adresse ${id}`)
}



const annulerCommande = (id) => {
  //  alert(`Annulation de la commande ${id}`)
   // return
    $.ajax({
                type: "PUT",
                url: `/api/commandes/${id}`,
                data: {
                    statutcommande:5
                },
                dataType: "application/json",
                statusCode: {
                    200: function (res, status, error) {
                        alert("Annulation de commande réussie")
                        window.location.reload()
                    }
                }
            })
}


const imprimerCommande = (id) => {
window.open(`/api/commandes/imprimer/${id}`)
}

$("#mettreajourMoncompte").click(function (e) {
    e.preventDefault();
    validerFormulaire()

    // chargement des villes et communes

    if (formulaire_moncompte.valid()) {
        formulaire_moncompte.submit()

        //alert("le formulaire est valide")
    } else {
        //alert("Le formulaire n'est pas valide")
    }

});

function validerFormulaire() {
    formulaire_moncompte.validate({
        rules: {
            nom: {
                required: true
            },
            prenom: {
                required: true
            },
            telephone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            motdepasse: {
                required: true

            },
            quartier: {
                required:true
            }

        },
        messages: {
            nom: "Le nom est requis",
            prenom: "Le prénom est requis",
            telephone: "Le téléphone est requis",
            motdepasse: "Mot de passe requis",
            email: {
                required: "L'adresse email est requise",
                email: "Format de mail non valide"
            },
            quartier:"Le quartier est requis"
        }
    })
}



})