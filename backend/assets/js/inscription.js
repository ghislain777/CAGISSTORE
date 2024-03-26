$(function () {
    var formulaireClient = $("#formulaire_client")
const lesvilles = villes

    // on initialise le formulaire avec le client par defaut
    const client = {
        nom:"",
        prenom :"",
        email:"",
        quartier:"",
        adresse:"",
        motdepasse:"",

    }

$("#villeinscription").empty();
$("#communeinscription").empty();
$("#quartierinscription").empty();

// on charge les villes
$("#villeinscription").append(` <option value= "" >Choisir votre ville</option>`);

lesvilles.forEach((ville) => {
    $("#villeinscription").append(` <option value= "${ville.id}" >${ville.nom}</option>`);
});

// villes est une vatiabl ejs à retrouver dans le fichier inscription_component.html
    
$("#villeinscription").change(function (e) {
    e.preventDefault();
    $("#communeinscription").empty();
    $("#quartierinscription").empty();

    // on recupere toutes les communes de la ville...
    $.ajax({
        type: "GET",
        url: `/api/communes?ville=${e.target.value}`,
        data: {},
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                var lescommunes = JSON.parse(res.responseText)
                console.log(lescommunes)
                $("#communeinscription").empty();
                 $("#communeinscription").append(`<option value="">Choisir votre commune*</option>`)
                lescommunes.rows.forEach((commune) => {
                    $("#communeinscription").append(`<option value=${commune.id}>${commune.nom}</option>`);
                });

            }
        }
    })

});


$("#communeinscription").change(function (e) {
    e.preventDefault();
    $("#quartierinscription").empty();

    // on recupere toutes les communes de la ville...
    $.ajax({
        type: "GET",
        url: `/api/quartiers?commune=${e.target.value}`,
        data: {},
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                var lesquartiers = JSON.parse(res.responseText)
                $("#quartierinscription").empty();
                $("#quartierinscription").append(`<option value="">Choisir votre quartier*</option>`)
                lesquartiers.rows.forEach((quartier) => {
                    $("#quartierinscription").append(`<option value=${quartier.id}>${quartier.nom}</option>`);
                });

            }
        }
    })

});


    $("#enregistrer").click(function (e) {
        e.preventDefault();
        validerFormulaire()

        // chargement des villes et communes

        if (formulaireClient.valid()) {
            formulaireClient.submit()

            //alert("le formulaire est valide")
        } else {
            //alert("Le formulaire n'est pas valide")
        }

    });

    function validerFormulaire() {
        formulaireClient.validate({
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