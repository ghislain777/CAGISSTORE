$(function () {
console.log(utilisateur)
const lesvilles = JSON.parse(villes)
// on ajoute la commune du client et on le selectionne
$("#commune").append(`<option value=${utilisateur.Quartier.Commune.id}>${utilisateur.Quartier.Commune.nom}</option>`);
$("#commune").val(utilisateur.Quartier.Commune.id);

$("#quartier").append(`<option value=${utilisateur.Quartier.id}>${utilisateur.Quartier.nom}</option>`);
$("#quartier").val(utilisateur.Quartier.id);

$("#ville").val(utilisateur.Quartier.Commune.Ville.id);

// on charge les quartiers et les communes

let index = lesvilles.findIndex((v) => v.id == utilisateur.Quartier.Commune.Ville.id)
        const laville = lesvilles[index]
        $("#commune").empty();
        laville.Communes.forEach((commune) => {
            $("#commune").append(
                `<option value= "${commune.id}" >${commune.nom}</option>`
            );
        });
        $("#commune").val(utilisateur.Quartier.Commune.id);

$.ajax({
    type: "GET",
    url: `/api/quartiers?commune=${utilisateur.Quartier.Commune.id}`,
    data: {},
    dataType: "application/json",
    statusCode: {
        200: function (res, status, error) {
            var lesquartuers = JSON.parse(res.responseText)
            $("#quartier").empty()
            $("#quartier").append(`<option value="">Quartier *</option>`)
            lesquartuers.rows.forEach((quartier) => {
                $("#quartier").append(`<option value=${quartier.id}>${quartier.nom}</option>`);
            });

            $("#quartier").val(utilisateur.Quartier.id);          

        }
    }
})



////****changement des element du formulaire */


$("input[formulaire=moncompte]").change(function (e) { 
    e.preventDefault();
    handleChangeFacturation(e)
});


function handleChangeUtilisateur({target:{name, value}}) {
    console.log(`nom: ${name} valeur ${value}`)
    utilisateur[name] = value
}

var formulaireMonCompte = $("#formulaire_moncompte")

// villes est une vatiabl ejs à retrouver dans le fichier inscription_component.html
    

    $("#ville").change(function () {
        const ville = $("#ville").val();
        // on cherche la ville
        let index = lesvilles.findIndex((v) => v.id == ville)
        const laville = lesvilles[index]
        console.log(laville)
        $("#commune").empty();
        laville.Communes.forEach((commune) => {
            $("#commune").append(
                `<option value= "${commune.id}" >${commune.nom}</option>`
            );
        });
    });

    $("#commune").change(function (e) {
        e.preventDefault();
        $("#quartier").empty();
        $.ajax({
            type: "GET",
            url: `/api/quartiers?commune=${e.target.value}`,
            data: {},
            dataType: "application/json",
            statusCode: {
                200: function (res, status, error) {
                    var lesquartuers = JSON.parse(res.responseText)
                    $("#quartier").append(`<option value="">Quartier *</option>`)
                    lesquartuers.rows.forEach((quartier) => {
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
                    required: false,
                    email: true
                },
                motdepasse: {
                    required: true

                }

            },
            messages: {
                nom: "Le nom est requis",
                prenom: "Le prénom est requis",
                telephone: "Le téléphone est requis",
                motdepasse: "Mot de passe requis",
                email: {
                    required: "l'adresse email est requise",
                    email: "format de mail non valide"
                }
            }
        })
    }
})