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

$("#ville").empty();
$("#commune").empty();
$("#quartier").empty();

// on charge les villes
$("#ville").append(` <option value= "" >Choisir votre ville</option>`);

lesvilles.forEach((ville) => {
    $("#ville").append(` <option value= "${ville.id}" >${ville.nom}</option>`);
});

// villes est une vatiabl ejs à retrouver dans le fichier inscription_component.html
    
$("#ville").change(function (e) {
    e.preventDefault();
    $("#commune").empty();
    $("#quartier").empty();

    // on recupere toutes les communes de la ville...
    $.ajax({
        type: "GET",
        url: `/api/communes?ville=${e.target.value}`,
        data: {},
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                var lescommunes = JSON.parse(res.responseText)
                $("#commune").append(`<option value="">Choisir votre commune*</option>`)
                lescommunes.rows.forEach((commune) => {
                    $("#commune").append(`<option value=${commune.id}>${commune.nom}</option>`);
                });

            }
        }
    })

});


$("#commune").change(function (e) {
    e.preventDefault();
    $("#quartier").empty();

    // on recupere toutes les communes de la ville...
    $.ajax({
        type: "GET",
        url: `/api/quartiers?commune=${e.target.value}`,
        data: {},
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                var lesquartiers = JSON.parse(res.responseText)
                $("#quartier").append(`<option value="">Choisir votre quartier*</option>`)
                lesquartiers.rows.forEach((quartier) => {
                    $("#quartier").append(`<option value=${quartier.id}>${quartier.nom}</option>`);
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